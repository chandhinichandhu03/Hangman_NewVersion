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

// Save score
router.post('/save', authenticateToken, (req, res) => {
    const { score, difficulty, category, result } = req.body;
    const userId = req.user.id;

    const query = `INSERT INTO scores (user_id, score, difficulty, category, result) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [userId, score, difficulty, category, result], function (err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Score saved successfully' });
    });
});

// Get user high scores and history
router.get('/history', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const query = `SELECT * FROM scores WHERE user_id = ? ORDER BY played_at DESC LIMIT 10`;

    db.all(query, [userId], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

// Get leaderboard
router.get('/leaderboard', (req, res) => {
    const query = `
        SELECT u.username, MAX(s.score) as high_score 
        FROM users u 
        JOIN scores s ON u.id = s.user_id 
        GROUP BY u.id 
        ORDER BY high_score DESC 
        LIMIT 10
    `;
    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

// Clear history
router.delete('/clear', authenticateToken, (req, res) => {
    const userId = req.user.id;
    console.log(`Clearing history for user ID: ${userId}`);
    const query = `DELETE FROM scores WHERE user_id = ?`;
    db.run(query, [userId], function (err) {
        if (err) {
            console.error('Database error in clear scores:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log(`Successfully cleared ${this.changes} rows for user ${userId}`);
        res.json({ message: 'History cleared successfully' });
    });
});

module.exports = router;
