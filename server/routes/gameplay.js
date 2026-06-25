const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../database');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Middleware to verify token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// GET User Profile & Extended Stats
router.get('/profile', authenticateToken, (req, res) => {
    const userId = req.user.id;
    
    // 1. Get user profile attributes
    const userQuery = `SELECT id, username, xp, level, streak, longest_streak, last_login, unlocked_themes, created_at FROM users WHERE id = ?`;
    db.get(userQuery, [userId], (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error fetching user' });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // 2. Get aggregate gameplay stats
        const statsQuery = `
            SELECT 
                COUNT(*) as total_played,
                SUM(CASE WHEN LOWER(result) = 'win' THEN 1 ELSE 0 END) as wins,
                SUM(CASE WHEN LOWER(result) = 'lose' THEN 1 ELSE 0 END) as losses,
                SUM(CASE WHEN LOWER(result) = 'quit' THEN 1 ELSE 0 END) as quits,
                MAX(score) as high_score,
                SUM(score) as cumulative_score
            FROM scores 
            WHERE user_id = ?
        `;
        db.get(statsQuery, [userId], (err, stats) => {
            if (err) return res.status(500).json({ error: 'Database error fetching stats' });

            // 3. Get category breakdown
            const catQuery = `
                SELECT category, COUNT(*) as count, SUM(CASE WHEN LOWER(result) = 'win' THEN 1 ELSE 0 END) as wins 
                FROM scores 
                WHERE user_id = ? 
                GROUP BY category
            `;
            db.all(catQuery, [userId], (err, categories) => {
                if (err) return res.status(500).json({ error: 'Database error fetching categories' });

                // 4. Get achievements
                const achQuery = `SELECT badge_id, unlocked_at FROM user_achievements WHERE user_id = ?`;
                db.all(achQuery, [userId], (err, achievements) => {
                    if (err) return res.status(500).json({ error: 'Database error fetching achievements' });

                    // 5. Get vocabulary count
                    const vocabQuery = `SELECT COUNT(*) as vocab_count FROM user_vocabulary WHERE user_id = ?`;
                    db.get(vocabQuery, [userId], (err, vocab) => {
                        if (err) return res.status(500).json({ error: 'Database error fetching vocabulary' });

                        res.json({
                            user: {
                                id: user.id,
                                username: user.username,
                                xp: user.xp || 0,
                                level: user.level || 1,
                                streak: user.streak || 0,
                                longestStreak: user.longest_streak || 0,
                                lastLogin: user.last_login,
                                unlockedThemes: user.unlocked_themes ? user.unlocked_themes.split(',') : ['light', 'dark'],
                                createdAt: user.created_at
                            },
                            stats: {
                                totalPlayed: stats.total_played || 0,
                                wins: stats.wins || 0,
                                losses: stats.losses || 0,
                                quits: stats.quits || 0,
                                highScore: stats.high_score || 0,
                                cumulativeScore: stats.cumulative_score || 0,
                                categories: categories || [],
                                vocabCount: vocab.vocab_count || 0
                            },
                            achievements: achievements || []
                        });
                    });
                });
            });
        });
    });
});

// POST Update Progress (XP, Level, Streak)
router.post('/progress', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { xpGained, result, difficulty, category, score } = req.body;

    if (xpGained === undefined) {
        return res.status(400).json({ error: 'xpGained is required' });
    }

    db.serialize(() => {
        // Get current user stats
        db.get(`SELECT xp, level, streak, longest_streak, last_login FROM users WHERE id = ?`, [userId], (err, user) => {
            if (err || !user) return res.status(500).json({ error: 'User lookup failed' });

            let newXp = (user.xp || 0) + xpGained;
            let currentLevel = user.level || 1;
            
            // Level formula: 100 XP * level for next level (e.g. Lvl 1->2 needs 100, 2->3 needs 200...)
            let xpNeeded = currentLevel * 100;
            let leveledUp = false;
            while (newXp >= xpNeeded) {
                newXp -= xpNeeded;
                currentLevel++;
                xpNeeded = currentLevel * 100;
                leveledUp = true;
            }

            // Streak update logic
            let newStreak = user.streak || 0;
            if (result === 'win') {
                newStreak++;
            } else if (result === 'lose') {
                newStreak = 0; // reset streak on loss
            } // 'quit' doesn't alter streak, or resets it. Let's reset on quit/lose, keep on win.

            let newLongestStreak = Math.max(user.longest_streak || 0, newStreak);
            const todayStr = new Date().toISOString().split('T')[0];

            db.run(
                `UPDATE users SET xp = ?, level = ?, streak = ?, longest_streak = ?, last_login = ? WHERE id = ?`,
                [newXp, currentLevel, newStreak, newLongestStreak, todayStr, userId],
                function(err) {
                    if (err) return res.status(500).json({ error: 'Failed to update progress' });

                    // Insert score into scores history
                    db.run(
                        `INSERT INTO scores (user_id, score, difficulty, category, result) VALUES (?, ?, ?, ?, ?)`,
                        [userId, score || 0, difficulty || 'easy', category || 'general', result || 'quit'],
                        function(err) {
                            if (err) console.error("Failed to log score:", err.message);

                            res.json({
                                message: 'Progress updated successfully',
                                xp: newXp,
                                level: currentLevel,
                                streak: newStreak,
                                longestStreak: newLongestStreak,
                                leveledUp
                            });
                        }
                    );
                }
            );
        });
    });
});

// POST Daily Reward Check-in
router.post('/daily-checkin', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const todayStr = new Date().toISOString().split('T')[0];

    db.get(`SELECT last_login, streak, longest_streak FROM users WHERE id = ?`, [userId], (err, user) => {
        if (err || !user) return res.status(500).json({ error: 'User check-in lookup failed' });

        const lastLogin = user.last_login;
        let streak = user.streak || 0;
        let checkedIn = false;
        let xpGained = 0;

        if (lastLogin !== todayStr) {
            checkedIn = true;
            // Daily check-in XP bonus based on current login streak (capped at 5 days streak)
            const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            
            if (lastLogin === yesterdayStr) {
                streak++;
            } else {
                streak = 1; // broken streak, reset to 1
            }

            xpGained = Math.min(streak * 20, 100); // 20 XP per day, max 100 XP

            // Update user profile
            const longestStreak = Math.max(user.longest_streak || 0, streak);
            db.run(
                `UPDATE users SET last_login = ?, streak = ?, longest_streak = ?, xp = xp + ? WHERE id = ?`,
                [todayStr, streak, longestStreak, xpGained, userId],
                (err) => {
                    if (err) return res.status(500).json({ error: 'Check-in failed' });
                    res.json({ checkedIn: true, streak, xpGained, message: `Checked in! Gained ${xpGained} XP.` });
                }
            );
        } else {
            res.json({ checkedIn: false, streak, message: 'Already checked in today.' });
        }
    });
});

// GET Custom Words
router.get('/custom-words', authenticateToken, (req, res) => {
    const userId = req.user.id;
    db.all(`SELECT id, word, category, hint, meaning FROM custom_words WHERE user_id = ? ORDER BY created_at DESC`, [userId], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error fetching custom words' });
        res.json(rows);
    });
});

// POST Add Custom Word
router.post('/custom-words', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { word, category, hint, meaning } = req.body;

    if (!word) return res.status(400).json({ error: 'Word is required' });

    const cleanWord = word.trim().toUpperCase();
    const cleanCategory = (category || 'custom').trim().toLowerCase();
    const cleanHint = (hint || '').trim();
    const cleanMeaning = (meaning || '').trim();

    db.run(
        `INSERT INTO custom_words (user_id, word, category, hint, meaning) VALUES (?, ?, ?, ?, ?)`,
        [userId, cleanWord, cleanCategory, cleanHint, cleanMeaning],
        function(err) {
            if (err) {
                if (err.message.includes('UNIQUE')) {
                    return res.status(400).json({ error: 'Word already exists in your collection' });
                }
                return res.status(500).json({ error: 'Failed to insert custom word' });
            }
            res.status(201).json({ id: this.lastID, word: cleanWord, message: 'Custom word added successfully' });
        }
    );
});

// DELETE Custom Word
router.delete('/custom-words/:id', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const wordId = req.params.id;

    db.run(`DELETE FROM custom_words WHERE id = ? AND user_id = ?`, [wordId, userId], function(err) {
        if (err) return res.status(500).json({ error: 'Failed to delete word' });
        if (this.changes === 0) return res.status(404).json({ error: 'Word not found' });
        res.json({ message: 'Custom word deleted successfully' });
    });
});

// GET Achievements
router.get('/achievements', authenticateToken, (req, res) => {
    const userId = req.user.id;
    db.all(`SELECT badge_id, unlocked_at FROM user_achievements WHERE user_id = ?`, [userId], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to load achievements' });
        res.json(rows);
    });
});

// POST Unlock Achievement
router.post('/achievements', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { badgeId } = req.body;

    if (!badgeId) return res.status(400).json({ error: 'badgeId is required' });

    db.run(`INSERT OR IGNORE INTO user_achievements (user_id, badge_id) VALUES (?, ?)`, [userId, badgeId], function(err) {
        if (err) return res.status(500).json({ error: 'Failed to save achievement' });
        res.status(201).json({ message: 'Achievement unlocked!', unlocked: this.changes > 0 });
    });
});

// GET Vocabulary Builder Words
router.get('/vocabulary', authenticateToken, (req, res) => {
    const userId = req.user.id;
    db.all(`SELECT id, word, category, meaning, learned_at FROM user_vocabulary WHERE user_id = ? ORDER BY learned_at DESC`, [userId], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error fetching vocabulary list' });
        res.json(rows);
    });
});

// POST Add Learned Word to Vocabulary
router.post('/vocabulary', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { word, category, meaning } = req.body;

    if (!word) return res.status(400).json({ error: 'Word is required' });

    const cleanWord = word.trim().toUpperCase();
    const cleanCategory = (category || 'general').trim().toLowerCase();
    const cleanMeaning = (meaning || '').trim();

    db.run(
        `INSERT OR IGNORE INTO user_vocabulary (user_id, word, category, meaning) VALUES (?, ?, ?, ?)`,
        [userId, cleanWord, cleanCategory, cleanMeaning],
        function(err) {
            if (err) return res.status(500).json({ error: 'Failed to update vocabulary list' });
            res.json({ message: 'Word logged to vocabulary list', added: this.changes > 0 });
        }
    );
});

module.exports = router;
