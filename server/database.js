const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'hangman.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        createTables();
    }
});

function createTables() {
    db.serialize(() => {
        // Users table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL COLLATE NOCASE,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Scores table
        db.run(`CREATE TABLE IF NOT EXISTS scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            score INTEGER DEFAULT 0,
            difficulty TEXT,
            category TEXT,
            result TEXT,
            played_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )`);

        // Custom words table
        db.run(`CREATE TABLE IF NOT EXISTS custom_words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            word TEXT NOT NULL COLLATE NOCASE,
            category TEXT,
            hint TEXT,
            meaning TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, word)
        )`);

        // User achievements table
        db.run(`CREATE TABLE IF NOT EXISTS user_achievements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            badge_id TEXT NOT NULL,
            unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, badge_id)
        )`);

        // User vocabulary builder log table
        db.run(`CREATE TABLE IF NOT EXISTS user_vocabulary (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            word TEXT NOT NULL COLLATE NOCASE,
            category TEXT,
            meaning TEXT,
            learned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, word)
        )`);

        // Add progression columns to users table if they do not exist
        db.all(`PRAGMA table_info(users)`, (err, rows) => {
            if (err) {
                console.error("Error fetching users table info:", err);
                return;
            }
            const columns = rows.map(r => r.name);
            const checkAndAdd = (colName, typeAndDefault) => {
                if (!columns.includes(colName)) {
                    db.run(`ALTER TABLE users ADD COLUMN ${colName} ${typeAndDefault}`, (err) => {
                        if (err) {
                            console.error(`Error adding column ${colName}:`, err.message);
                        } else {
                            console.log(`Added column ${colName} to users table.`);
                        }
                    });
                }
            };
            checkAndAdd('xp', 'INTEGER DEFAULT 0');
            checkAndAdd('level', 'INTEGER DEFAULT 1');
            checkAndAdd('streak', 'INTEGER DEFAULT 0');
            checkAndAdd('longest_streak', 'INTEGER DEFAULT 0');
            checkAndAdd('last_login', 'TEXT');
            checkAndAdd('unlocked_themes', "TEXT DEFAULT 'light,dark,colorblind'");
        });

        console.log('Tables created or verified.');
    });
}

module.exports = db;
