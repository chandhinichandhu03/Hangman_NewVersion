// Confetti Effect Engine (Vanilla Canvas, offline-compatible)
class ConfettiEffect {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.active = false;
        window.addEventListener('resize', () => this.resize());
        this.resize();
    }
    resize() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }
    start() {
        this.active = true;
        this.particles = [];
        const colors = ['#4F9CF9', '#6EE7B7', '#A78BFA', '#FB923C', '#EF4444'];
        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                vx: Math.random() * 6 - 3,
                vy: Math.random() * 5 + 4,
                size: Math.random() * 6 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 8 - 4
            });
        }
        this.loop();
    }
    loop() {
        if (!this.active) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let finished = true;
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            if (p.y < this.canvas.height) finished = false;
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation * Math.PI / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
        });
        if (!finished) {
            requestAnimationFrame(() => this.loop());
        } else {
            this.active = false;
        }
    }
}

class HangmanGame {
    constructor() {
        // Base configurations
        this.category = localStorage.getItem('game_category') || 'programming';
        this.difficulty = localStorage.getItem('game_difficulty') || 'easy';
        this.mode = localStorage.getItem('game_mode') || 'classic';
        
        this.targetWord = '';
        this.targetWordMeta = null;
        this.guessedLetters = {}; // Tracks letters and occurrences
        this.wrongAttempts = 0;
        this.maxAttempts = 6;
        this.totalScore = 0;
        this.round = 1;
        this.streak = 0;
        this.isGameOver = false;

        // Progressive Hints tracking
        this.hintsUsed = 0;
        this.unlockedHint1 = false;
        this.unlockedHint2 = false;
        this.unlockedHint3 = false;

        // Timed Mode state
        this.timerSeconds = 60;
        this.timerInterval = null;

        // Survival Mode state
        this.survivalTotalLives = 8;

        // Confetti engine instance
        this.confetti = new ConfettiEffect('confetti-canvas');

        // Setup global callbacks & keyboard shortcut listener
        document.getElementById('modal-restart-btn').onclick = () => this.resetGame();
        document.getElementById('quit-quest-btn').onclick = () => {
            if (confirm('Are you sure you want to quit this quest?')) {
                this.endRound('QUIT');
            }
        };

        const bookmarkBtn = document.getElementById('bookmark-word-btn');
        if (bookmarkBtn) {
            bookmarkBtn.onclick = () => this.bookmarkWord();
        }

        window.addEventListener('keydown', (e) => this.handleKeyboardShortcut(e));

        // Initial setup
        this.init();
        window.game = this;
    }

    handleKeyboardShortcut(e) {
        if (this.isGameOver) return;
        const key = e.key.toUpperCase();
        if (key >= 'A' && key <= 'Z') {
            // Find corresponding virtual button on screen
            const keys = document.querySelectorAll('.key');
            for (let btn of keys) {
                if (btn.textContent === key && !btn.disabled) {
                    this.handleGuess(key, btn);
                    break;
                }
            }
        }
    }

    resetGame() {
        this.totalScore = 0;
        this.round = 1;
        this.streak = 0;
        this.survivalTotalLives = 8;
        this.timerSeconds = 60;

        document.getElementById('score-display').textContent = `Score: 0`;
        document.getElementById('modal-overlay').style.display = 'none';
        this.init();
    }

    // Single deterministic hash to seed daily challenges based on current date
    getDateHashSeed() {
        const str = new Date().toDateString();
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash);
    }

    init() {
        // Reset progressive hint buttons UI
        this.hintsUsed = 0;
        this.unlockedHint1 = false;
        this.unlockedHint2 = false;
        this.unlockedHint3 = false;
        
        const h1 = document.getElementById('hint-lvl-1');
        const h2 = document.getElementById('hint-lvl-2');
        const h3 = document.getElementById('hint-lvl-3');
        if (h1) { h1.className = 'hint-level-btn'; h1.disabled = false; }
        if (h2) { h2.className = 'hint-level-btn'; h2.disabled = false; }
        if (h3) { h3.className = 'hint-level-btn'; h3.disabled = false; }

        document.getElementById('hint-text').textContent = 'Request a hint level above to reveal clues.';
        document.getElementById('round-count').textContent = this.round;
        document.getElementById('streak-display').textContent = `🔥 Streak: ${this.streak}`;
        
        // Remove keyboard assist highlights
        this.clearKeyHighlights();

        // 1. Pick target word based on mode & parameters
        if (this.mode === 'multiplayer') {
            this.setupPassAndPlayMode();
            return;
        } else if (this.mode === 'daily') {
            this.setupDailyChallengeMode();
        } else if (this.category === 'custom') {
            this.setupCustomCategoryWord();
        } else {
            this.setupStandardWord();
        }

        // Apply theme settings
        applyCurrentTheme();

        // Render game interface
        this.isGameOver = false;
        this.guessedLetters = {};
        this.wrongAttempts = 0;

        this.resetHangmanSVG();
        this.renderWord();
        this.renderKeyboard();
        this.setupModeUI();
    }

    setupStandardWord() {
        // Dynamic Difficulty adjustment based on session streak
        if (this.streak >= 3 && this.difficulty !== 'expert') {
            if (confirm('You are on a streak! Increase difficulty to the next level?')) {
                const diffs = ['easy', 'medium', 'hard', 'expert'];
                const idx = diffs.indexOf(this.difficulty);
                this.difficulty = diffs[idx + 1];
                localStorage.setItem('game_difficulty', this.difficulty);
            }
        }

        let currentDiff = this.difficulty;
        if (this.mode === 'endless') {
            // Endless mode gradually scales difficulties
            if (this.round >= 9) currentDiff = 'expert';
            else if (this.round >= 6) currentDiff = 'hard';
            else if (this.round >= 3) currentDiff = 'medium';
            else currentDiff = 'easy';
        }

        const wordsList = window.WORDS_DATASET[this.category][currentDiff];
        const entry = wordsList[Math.floor(Math.random() * wordsList.length)];
        
        this.targetWord = entry.word.toUpperCase();
        this.targetWordMeta = entry;
    }

    async setupCustomCategoryWord() {
        try {
            const list = await window.api.gameplay.getCustomWords();
            if (!list || !list.length) {
                alert('Your Custom Collection is empty! Loading standard Programming words instead.');
                this.category = 'programming';
                this.setupStandardWord();
                this.init();
                return;
            }
            const entry = list[Math.floor(Math.random() * list.length)];
            this.targetWord = entry.word.toUpperCase();
            this.targetWordMeta = {
                word: entry.word,
                meaning: entry.meaning || 'No definition logged.',
                synonyms: ['N/A'],
                antonyms: ['N/A'],
                fact: 'A word custom created in your collection.',
                origin: 'Custom words',
                pronunciation: '/Custom/'
            };
            this.renderWord();
        } catch (e) {
            console.error("Custom word load failed:", e);
        }
    }

    setupDailyChallengeMode() {
        const seed = this.getDateHashSeed();
        const categories = Object.keys(window.WORDS_DATASET);
        const selectedCat = categories[seed % categories.length];
        
        const difficulties = ['easy', 'medium', 'hard', 'expert'];
        const selectedDiff = difficulties[seed % difficulties.length];
        
        const list = window.WORDS_DATASET[selectedCat][selectedDiff];
        const entry = list[seed % list.length];

        this.targetWord = entry.word.toUpperCase();
        this.targetWordMeta = entry;
        this.category = selectedCat;
        this.difficulty = selectedDiff;
    }

    setupPassAndPlayMode() {
        const customWord = prompt("PLAYER 1: Enter a secret word (letters only):");
        if (!customWord) {
            window.location.href = 'dashboard.html';
            return;
        }
        
        const clean = customWord.trim().toUpperCase();
        if (!/^[A-Z]+$/.test(clean)) {
            alert("Invalid word. Letters only!");
            this.setupPassAndPlayMode();
            return;
        }

        const category = prompt("Enter a category label:") || "Friends Guess";
        const hint = prompt("Enter a clue or hint:") || "A word created just for you";
        const meaning = prompt("Enter the word definition (optional):") || "";

        this.targetWord = clean;
        this.targetWordMeta = {
            word: clean,
            meaning: meaning || 'Custom created pass-and-play word.',
            synonyms: ['N/A'],
            antonyms: ['N/A'],
            fact: 'Play local multiplayer with friends.',
            origin: 'Pass and Play Mode',
            pronunciation: `/${clean.toLowerCase()}/`
        };

        // Reload parameters
        this.isGameOver = false;
        this.guessedLetters = {};
        this.wrongAttempts = 0;

        document.getElementById('display-category').textContent = category;
        document.getElementById('display-difficulty').textContent = 'Custom';

        this.resetHangmanSVG();
        this.renderWord();
        this.renderKeyboard();
        this.setupModeUI();
    }

    setupModeUI() {
        // Toggle specific mode boxes
        const timerBadge = document.getElementById('timer-badge');
        const heartsContainer = document.getElementById('hearts-container');
        const timedBar = document.getElementById('timed-bar-container');
        const modeText = document.getElementById('display-mode');

        timerBadge.style.display = 'none';
        heartsContainer.style.display = 'none';
        timedBar.style.display = 'none';

        if (this.mode === 'timed') {
            timerBadge.style.display = 'block';
            timedBar.style.display = 'block';
            modeText.textContent = 'Timed Challenge';
            this.startTimedModeTimer();
        } else if (this.mode === 'survival') {
            heartsContainer.style.display = 'flex';
            modeText.textContent = 'Survival Mode';
            this.renderSurvivalHearts();
        } else if (this.mode === 'endless') {
            modeText.textContent = `Endless Round ${this.round}`;
        } else if (this.mode === 'daily') {
            modeText.textContent = 'Daily Challenge';
        } else if (this.mode === 'multiplayer') {
            modeText.textContent = 'Pass & Play';
        } else {
            modeText.textContent = 'Classic Game';
        }

        document.getElementById('display-category').textContent = this.category.replace('_', ' ');
        document.getElementById('display-difficulty').textContent = this.difficulty;
    }

    // Timed Mode Timer controls
    startTimedModeTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        const tick = () => {
            this.timerSeconds--;
            document.getElementById('timer-sec').textContent = this.timerSeconds;
            
            const pct = (this.timerSeconds / 60) * 100;
            const barFill = document.getElementById('timed-bar-fill');
            if (barFill) barFill.style.width = `${Math.min(pct, 100)}%`;

            if (this.timerSeconds <= 15) {
                document.getElementById('timer-badge').classList.add('timer-glow');
            } else {
                document.getElementById('timer-badge').classList.remove('timer-glow');
            }

            if (this.timerSeconds <= 0) {
                clearInterval(this.timerInterval);
                this.endRound('LOSE');
            }
        };

        this.timerInterval = setInterval(tick, 1000);
    }

    renderSurvivalHearts() {
        const container = document.getElementById('hearts-container');
        container.innerHTML = '';
        for (let i = 0; i < this.survivalTotalLives; i++) {
            container.innerHTML += '<span class="heart-icon">❤️</span>';
        }
        if (this.survivalTotalLives === 0) {
            container.innerHTML = '<span style="color:var(--danger); font-weight:800;">DEFEATED</span>';
        }
    }

    // Progressive Hints engine
    useHint(level) {
        if (this.isGameOver) return;
        const hintText = document.getElementById('hint-text');

        if (level === 1 && !this.unlockedHint1) {
            this.unlockedHint1 = true;
            this.hintsUsed++;
            document.getElementById('hint-lvl-1').classList.add('used');
            document.getElementById('hint-lvl-1').disabled = true;
            
            const meaning = this.targetWordMeta ? this.targetWordMeta.meaning : "A vocabulary term.";
            hintText.innerHTML = `<span style="color:var(--primary-color); font-weight:800;">Definition:</span> ${meaning}`;
        } 
        else if (level === 2 && !this.unlockedHint2) {
            this.unlockedHint2 = true;
            this.hintsUsed++;
            document.getElementById('hint-lvl-2').classList.add('used');
            document.getElementById('hint-lvl-2').disabled = true;

            // Pick a letter in target word not yet guessed
            const alphabet = [...this.targetWord];
            const unrevealed = alphabet.filter(char => !this.guessedLetters[char]);
            if (unrevealed.length > 0) {
                const revealChar = unrevealed[Math.floor(Math.random() * unrevealed.length)];
                const index = this.targetWord.indexOf(revealChar) + 1;
                hintText.innerHTML = `<span style="color:var(--primary-color); font-weight:800;">Letter Clue:</span> The letter '<strong style="color:var(--accent-color);">${revealChar}</strong>' is located at spot ${index}.`;
            } else {
                hintText.textContent = "All characters have already been discovered!";
            }
        } 
        else if (level === 3 && !this.unlockedHint3) {
            this.unlockedHint3 = true;
            this.hintsUsed++;
            document.getElementById('hint-lvl-3').classList.add('used');
            document.getElementById('hint-lvl-3').disabled = true;

            // Smart Keyboard highlighting: highlight one correct unrevealed key
            const alphabet = [...this.targetWord];
            const unrevealed = alphabet.filter(char => !this.guessedLetters[char] && char !== ' ');
            
            if (unrevealed.length > 0) {
                const highlightChar = unrevealed[0];
                const keys = document.querySelectorAll('.key');
                keys.forEach(btn => {
                    if (btn.textContent === highlightChar) {
                        btn.classList.add('key-highlight');
                    }
                });
                hintText.innerHTML = `<span style="color:var(--primary-color); font-weight:800;">Keyboard Assist:</span> A recommended character has been highlighted on your console keyboard!`;
            } else {
                hintText.textContent = "All characters are already solved.";
            }
        }
    }

    clearKeyHighlights() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(btn => btn.classList.remove('key-highlight'));
    }

    resetHangmanSVG() {
        for (let i = 0; i < 6; i++) {
            const part = document.getElementById(`part-${i}`);
            if (part) part.classList.remove('visible');
        }
    }

    renderWord() {
        const container = document.getElementById('word-display');
        container.innerHTML = '';
        const revealCounts = {};

        [...this.targetWord].forEach((char) => {
            const slot = document.createElement('div');
            slot.className = 'letter-slot';

            if (char === ' ') {
                slot.textContent = ' ';
                slot.style.borderBottom = 'none';
                slot.style.width = '20px';
            } else {
                revealCounts[char] = (revealCounts[char] || 0) + 1;
                const timesGuessed = this.guessedLetters[char] || 0;
                slot.textContent = (timesGuessed >= revealCounts[char]) ? char : '';
            }
            container.appendChild(slot);
        });
    }

    renderKeyboard() {
        const container = document.getElementById('keyboard');
        container.innerHTML = '';
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        [...alphabet].forEach(char => {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.textContent = char;

            const totalInWord = [...this.targetWord].filter(c => c === char).length;
            const currentlyGuessed = this.guessedLetters[char] || 0;
            if (totalInWord > 0 && currentlyGuessed >= totalInWord) {
                btn.disabled = true;
                btn.classList.add('correct');
            } else if (currentlyGuessed > 0 && totalInWord === 0) {
                btn.disabled = true;
                btn.classList.add('wrong');
            }

            btn.onclick = () => this.handleGuess(char, btn);
            container.appendChild(btn);
        });
    }

    handleGuess(letter, btnElement) {
        if (this.isGameOver) return;
        this.clearKeyHighlights();

        this.guessedLetters[letter] = (this.guessedLetters[letter] || 0) + 1;
        const instancesInWord = [...this.targetWord].filter(c => c === letter).length;

        if (instancesInWord > 0) {
            this.playSound('correct');
            this.totalScore += 20;
            this.renderWord();

            if (this.guessedLetters[letter] >= instancesInWord) {
                btnElement.classList.add('correct');
                btnElement.disabled = true;
            }
            this.checkWin();
        } else {
            btnElement.classList.add('wrong');
            btnElement.disabled = true;
            this.playSound('wrong');
            this.wrongAttempts++;
            
            if (this.mode === 'survival') {
                this.survivalTotalLives--;
                this.renderSurvivalHearts();
                if (this.survivalTotalLives <= 0) {
                    this.endRound('LOSE');
                    return;
                }
            } else {
                this.showHangmanPart();
            }

            this.updateLives();
            this.totalScore = Math.max(0, this.totalScore - 5);
            this.streak = 0;
            document.getElementById('streak-display').textContent = `🔥 Streak: ${this.streak}`;
            
            if (this.mode !== 'survival' && this.wrongAttempts >= this.maxAttempts) {
                this.endRound('LOSE');
            }
        }

        document.getElementById('score-display').textContent = `Score: ${this.totalScore}`;
    }

    showHangmanPart() {
        const part = document.getElementById(`part-${this.wrongAttempts - 1}`);
        if (part) part.classList.add('visible');
    }

    updateLives() {
        if (this.mode === 'survival') {
            document.getElementById('lives-count').textContent = this.survivalTotalLives;
        } else {
            document.getElementById('lives-count').textContent = this.maxAttempts - this.wrongAttempts;
        }
    }

    playSound(type) {
        if (localStorage.getItem('sound_enabled') === 'false') return;
        const audio = document.getElementById(`sound-${type}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio playback delayed/disabled'));
        }
    }

    checkWin() {
        const isWon = [...this.targetWord].every(char => {
            if (char === ' ') return true;
            return (this.guessedLetters[char] || 0) >= [...this.targetWord].filter(c => c === char).length;
        });

        if (isWon) {
            this.totalScore += 50; // Win bonus
            this.streak++;
            
            if (this.mode === 'survival') {
                // Add 1 survival heart back on success, cap at 8
                this.survivalTotalLives = Math.min(this.survivalTotalLives + 1, 8);
            }
            if (this.mode === 'timed') {
                // Add 15 extra seconds on success
                this.timerSeconds += 15;
            }

            this.endRound('WIN');
        }
    }

    async endRound(result) {
        this.isGameOver = true;
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.playSound(result === 'WIN' ? 'win' : 'lose');

        if (result === 'WIN') {
            // Trigger Confetti explosion
            this.confetti.start();
            this.showGameOverModal('WIN');

            // Log learned word automatically to Vocabulary Builder database
            if (this.targetWordMeta) {
                try {
                    await window.api.gameplay.addVocabularyWord({
                        word: this.targetWord,
                        category: this.category,
                        meaning: this.targetWordMeta.meaning
                    });
                } catch (e) {
                    console.error("Vocabulary insert failed:", e);
                }
            }

            // Sync User Progress & Score
            try {
                await window.api.gameplay.updateProgress({
                    xpGained: 50 + (this.streak * 10),
                    result: 'win',
                    difficulty: this.difficulty,
                    category: this.category,
                    score: this.totalScore
                });
            } catch (err) {
                console.error("Failed to update server progress:", err);
            }

            // In timed or endless, proceed round after 2.5s delay
            if (this.mode === 'timed' || this.mode === 'endless') {
                setTimeout(() => {
                    document.getElementById('modal-overlay').style.display = 'none';
                    this.round++;
                    this.init();
                }, 2800);
            }

        } else {
            this.showGameOverModal(result === 'QUIT' ? 'QUIT' : 'LOSE');
            
            // Sync User Progress & Score for loss
            try {
                await window.api.gameplay.updateProgress({
                    xpGained: 10,
                    result: 'lose',
                    difficulty: this.difficulty,
                    category: this.category,
                    score: this.totalScore
                });
            } catch (err) {
                console.error("Failed to update server progress:", err);
            }
        }
    }

    async bookmarkWord() {
        if (!this.targetWord) return;
        try {
            await window.api.gameplay.addVocabularyWord({
                word: this.targetWord,
                category: this.category,
                meaning: this.targetWordMeta ? this.targetWordMeta.meaning : "A bookmarked vocabulary word."
            });
            alert(`Logged "${this.targetWord}" to your vocabulary library!`);
        } catch (e) {
            alert(e.message);
        }
    }

    showGameOverModal(status) {
        const modal = document.getElementById('modal-overlay');
        const title = document.getElementById('modal-title');
        const score = document.getElementById('modal-score');
        const target = document.getElementById('target-word');

        if (status === 'WIN') {
            title.textContent = 'QUEST COMPLETED!';
            title.style.color = 'var(--success)';
            score.textContent = `+${50 + (this.streak * 10)} XP Logged (Total Score: ${this.totalScore})`;
        } else if (status === 'QUIT') {
            title.textContent = 'QUEST ENDED';
            title.style.color = 'var(--warning)';
            score.textContent = `Final Score: ${this.totalScore}`;
        } else {
            title.textContent = 'QUEST FAILED!';
            title.style.color = 'var(--danger)';
            score.textContent = `Score: ${this.totalScore} (Reached Round ${this.round})`;
        }

        target.textContent = this.targetWord;

        // Render educational facts in modal
        if (this.targetWordMeta) {
            document.getElementById('modal-pronunciation').textContent = this.targetWordMeta.pronunciation || '/.../';
            document.getElementById('modal-meaning').textContent = this.targetWordMeta.meaning || 'N/A';
            document.getElementById('modal-synonyms').textContent = (this.targetWordMeta.synonyms || ['N/A']).join(', ');
            document.getElementById('modal-antonyms').textContent = (this.targetWordMeta.antonyms || ['N/A']).join(', ');
            document.getElementById('modal-origin').textContent = this.targetWordMeta.origin || 'N/A';
            document.getElementById('modal-fact').textContent = this.targetWordMeta.fact || 'N/A';
        }

        // Generate mistake analysis report on failure
        const analysisPanel = document.getElementById('mistake-analysis-panel');
        if (status === 'LOSE' || status === 'QUIT') {
            const wrongGuesses = Object.keys(this.guessedLetters).filter(char => !this.targetWord.includes(char));
            const vowelCount = wrongGuesses.filter(c => ['A','E','I','O','U'].includes(c)).length;
            const rareLetters = wrongGuesses.filter(c => ['Z','Q','X','J','K','V'].includes(c));

            let report = '';
            if (wrongGuesses.length === 0) {
                report = "Time ran out before you could finish guessing.";
            } else {
                report = `You had ${wrongGuesses.length} incorrect guesses: ${wrongGuesses.join(', ')}. `;
                if (vowelCount === 0 && wrongGuesses.length > 2) {
                    report += "Tip: Try finding vowels (A, E, I, O, U) early in the game to establish word vowels.";
                } else if (rareLetters.length > 1) {
                    report += `Avoid guessing low-frequency letters like ${rareLetters.join(', ')} in early turns. Stick to common ones like T, S, R, N, E.`;
                } else {
                    report += "Try unlocking Level 2 and 3 hints if you struggle to identify word slots next time!";
                }
            }
            document.getElementById('mistake-analysis-text').textContent = report;
            analysisPanel.style.display = 'block';
        } else {
            analysisPanel.style.display = 'none';
        }

        modal.style.display = 'flex';
    }

    downloadResult(format) {
        const username = localStorage.getItem('username') || 'Player';
        const date = new Date().toLocaleString();
        const content = `
HANGMAN QUEST - BATTLE REPORT
-----------------------------
Player: ${username}
Category: ${this.category.toUpperCase()}
Difficulty: ${this.difficulty.toUpperCase()}
Mode: ${this.mode.toUpperCase()}
Total Rounds: ${this.round}
Final Score: ${this.totalScore}
Status: ${this.wrongAttempts >= this.maxAttempts ? 'FAILED' : 'SUCCESS'}
Date: ${date}
-----------------------------
Uncover Word: ${this.targetWord}
Definition: ${this.targetWordMeta ? this.targetWordMeta.meaning : ''}
Facts: ${this.targetWordMeta ? this.targetWordMeta.fact : ''}
        `.trim();

        const filename = `Hangman_Quest_${username}_Report`.replace(/ /g, '_');

        switch (format) {
            case 'txt':
                this.saveBlob(new Blob([content], { type: 'text/plain' }), `${filename}.txt`);
                break;
            case 'csv':
                const csv = `Field,Value\nUsername,${username}\nCategory,${this.category}\nDifficulty,${this.difficulty}\nMode,${this.mode}\nRounds,${this.round}\nScore,${this.totalScore}\nWord,${this.targetWord}\nDate,${date}`;
                this.saveBlob(new Blob([csv], { type: 'text/csv' }), `${filename}.csv`);
                break;
            case 'pdf':
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.setFontSize(22);
                doc.text("HANGMAN QUEST REPORT", 20, 30);
                doc.setFontSize(14);
                doc.text(`Player: ${username}`, 20, 50);
                doc.text(`Category: ${this.category}`, 20, 60);
                doc.text(`Difficulty: ${this.difficulty}`, 20, 70);
                doc.text(`Mode: ${this.mode}`, 20, 80);
                doc.text(`Final Score: ${this.totalScore}`, 20, 90);
                doc.text(`Target Word: ${this.targetWord}`, 20, 100);
                doc.text(`Date: ${date}`, 20, 110);
                doc.save(`${filename}.pdf`);
                break;
            case 'xlsx':
                const wb = XLSX.utils.book_new();
                const wsData = [
                    ["Field", "Value"],
                    ["Username", username],
                    ["Category", this.category],
                    ["Difficulty", this.difficulty],
                    ["Mode", this.mode],
                    ["Rounds", this.round],
                    ["Score", this.totalScore],
                    ["Word", this.targetWord],
                    ["Date", date]
                ];
                const ws = XLSX.utils.aoa_to_sheet(wsData);
                XLSX.utils.book_append_sheet(wb, ws, "Quest Results");
                XLSX.writeFile(wb, `${filename}.xlsx`);
                break;
            case 'docx':
                const html = `
                    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
                    <head><meta charset='utf-8'><title>Quest Report</title></head>
                    <body>
                        <h1>HANGMAN QUEST REPORT</h1>
                        <p><b>Player:</b> ${username}</p>
                        <p><b>Category:</b> ${this.category}</p>
                        <p><b>Difficulty:</b> ${this.difficulty}</p>
                        <p><b>Mode:</b> ${this.mode}</p>
                        <p><b>Score:</b> ${this.totalScore}</p>
                        <p><b>Word:</b> ${this.targetWord}</p>
                        <p><b>Date:</b> ${date}</p>
                    </body>
                    </html>
                `;
                this.saveBlob(new Blob([html], { type: 'application/msword' }), `${filename}.doc`);
                break;
        }
    }

    saveBlob(blob, filename) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
}

// Global functions helper
function applyCurrentTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('dark-mode', 'light-mode', 'colorblind-mode', 'kids-mode');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'colorblind') {
        document.body.classList.add('colorblind-mode');
    } else if (savedTheme === 'kids') {
        document.body.classList.add('kids-mode');
    }
    
    // Dyslexia Accessibility font trigger
    const activeDyslexia = localStorage.getItem('dyslexia_font') === 'true';
    if (activeDyslexia) {
        document.body.classList.add('dyslexia-font');
    } else {
        document.body.classList.remove('dyslexia-font');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('token')) {
        window.location.href = '/index.html';
        return;
    }
    new HangmanGame();
});
