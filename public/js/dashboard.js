document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (!token) {
        window.location.href = '/index.html';
        return;
    }

    // Initialize UI settings from local storage
    initSettingsUI();

    // Setup Tabs Navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.onclick = () => {
            const targetTab = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetElement = document.getElementById(`tab-${targetTab}`);
            if (targetElement) targetElement.classList.add('active');

            // Trigger specific tab loads
            if (targetTab === 'stats') {
                loadStatsTab();
            } else if (targetTab === 'discovery') {
                loadDiscoveryTab();
            } else if (targetTab === 'custom') {
                loadCustomWordsTab();
            } else if (targetTab === 'showcase') {
                loadShowcaseTab();
            }
        };
    });

    // Logout
    document.getElementById('logout-btn').onclick = () => {
        localStorage.clear();
        window.location.href = '/index.html';
    };

    // Category and difficulty buttons setup
    const categorySelect = document.getElementById('game-category');
    categorySelect.onchange = () => {
        localStorage.setItem('game_category', categorySelect.value);
    };
    if (localStorage.getItem('game_category')) {
        categorySelect.value = localStorage.getItem('game_category');
    } else {
        localStorage.setItem('game_category', 'programming');
    }

    const diffBtns = document.querySelectorAll('.difficulty-btn');
    diffBtns.forEach(btn => {
        btn.onclick = () => {
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            localStorage.setItem('game_difficulty', btn.dataset.value);
        };
    });
    // Set active difficulty
    const savedDifficulty = localStorage.getItem('game_difficulty') || 'easy';
    localStorage.setItem('game_difficulty', savedDifficulty);
    diffBtns.forEach(btn => {
        if (btn.dataset.value === savedDifficulty) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Game Mode selection
    const modeCards = document.querySelectorAll('.mode-card');
    modeCards.forEach(card => {
        card.onclick = () => {
            modeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            localStorage.setItem('game_mode', card.dataset.mode);
        };
    });
    const savedMode = localStorage.getItem('game_mode') || 'classic';
    localStorage.setItem('game_mode', savedMode);
    modeCards.forEach(card => {
        if (card.dataset.mode === savedMode) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Start Quest button redirection
    document.getElementById('start-quest-btn').onclick = () => {
        window.location.href = 'game.html';
    };

    // Clear History Button
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    if (clearHistoryBtn) {
        clearHistoryBtn.onclick = async () => {
            if (confirm('Clear all quest histories?')) {
                try {
                    await window.api.scores.clearHistory();
                    loadHistoryAndLeaderboard();
                } catch (error) {
                    console.error("Clear error:", error);
                }
            }
        };
    }

    // Initial Data Loads
    loadHistoryAndLeaderboard();
    loadShowcaseTab();
    triggerOnboardingCheck();
});

// History & Leaderboard Load
async function loadHistoryAndLeaderboard() {
    try {
        const [history, leaderboard] = await Promise.all([
            window.api.scores.getHistory(),
            window.api.scores.getLeaderboard()
        ]);
        displayHistoryList(history);
        displayLeaderboardList(leaderboard);
    } catch (err) {
        console.error("Failed to load history/leaderboard:", err);
    }
}

function displayHistoryList(history) {
    const list = document.getElementById('history-list');
    if (!history || !history.length) {
        list.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; padding: 10px;">No quests logged.</p>';
        return;
    }
    list.innerHTML = history.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-bottom: 1px solid var(--glass-border);">
            <div>
                <span style="display: block; font-size: 0.85rem; font-weight: 800; text-transform: capitalize;">${item.category}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${item.difficulty} • ${new Date(item.played_at).toLocaleDateString()}</span>
            </div>
            <span style="color: ${item.result === 'win' ? 'var(--success)' : 'var(--danger)'}; font-weight: 800; font-size: 0.85rem;">
                ${item.score} pts
            </span>
        </div>
    `).join('');
}

function displayLeaderboardList(leaderboard) {
    const list = document.getElementById('leaderboard-list');
    if (!leaderboard || !leaderboard.length) {
        list.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; padding: 10px;">Leaderboard is empty.</p>';
        return;
    }
    list.innerHTML = leaderboard.slice(0, 5).map((item, idx) => `
        <div style="display: flex; align-items: center; gap: 10px; padding: 6px 10px; border-bottom: 1px solid var(--glass-border);">
            <span style="font-weight: 800; color: var(--primary-color); width: 18px;">#${idx+1}</span>
            <span style="flex: 1; font-size: 0.85rem;">${item.username}</span>
            <span style="font-weight: 800; font-size: 0.85rem;">${item.high_score}</span>
        </div>
    `).join('');
}

// Stats Tab Load
async function loadStatsTab() {
    try {
        const profile = await window.api.gameplay.getProfile();
        
        document.getElementById('stats-played').textContent = profile.stats.totalPlayed;
        document.getElementById('stats-highscore').textContent = profile.stats.highScore;
        document.getElementById('stats-streak').textContent = profile.user.streak;
        document.getElementById('stats-longeststreak').textContent = profile.user.longestStreak;
        document.getElementById('stats-vocabcount').textContent = profile.stats.vocabCount;
        
        document.getElementById('stats-wins').textContent = profile.stats.wins;
        document.getElementById('stats-losses').textContent = profile.stats.losses;
        document.getElementById('stats-quits').textContent = profile.stats.quits;

        const ratio = profile.stats.totalPlayed > 0 
            ? Math.round((profile.stats.wins / profile.stats.totalPlayed) * 100) 
            : 0;
        document.getElementById('stats-winratio').textContent = `${ratio}%`;

        // Rank Class calculations
        let rank = 'NOVICE';
        if (profile.stats.wins >= 25) rank = 'GRANDMASTER';
        else if (profile.stats.wins >= 15) rank = 'CHAMPION';
        else if (profile.stats.wins >= 8) rank = 'EXPERT';
        else if (profile.stats.wins >= 3) rank = 'SCHOLAR';
        document.getElementById('stats-rank').textContent = rank;

        // Populate Category charts
        const chartBox = document.getElementById('category-chart');
        chartBox.innerHTML = '';

        if (!profile.stats.categories || !profile.stats.categories.length) {
            chartBox.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">Play categories to build analysis distribution.</p>';
            return;
        }

        const maxCount = Math.max(...profile.stats.categories.map(c => c.count));
        profile.stats.categories.forEach(c => {
            const pct = Math.round((c.count / maxCount) * 100);
            chartBox.innerHTML += `
                <div class="bar-chart-row">
                    <span class="bar-chart-label">${c.category}</span>
                    <div class="bar-chart-track">
                        <div class="bar-chart-fill" style="width: ${pct}%;"></div>
                    </div>
                    <span class="bar-chart-val">${c.wins}/${c.count}</span>
                </div>
            `;
        });

    } catch (err) {
        console.error("Stats fetch error:", err);
    }
}

// Showcase Tab Load (XP, Badges, Login Reward)
async function loadShowcaseTab() {
    try {
        const profile = await window.api.gameplay.getProfile();
        
        document.getElementById('showcase-username').textContent = profile.user.username;
        document.getElementById('showcase-level').textContent = profile.user.level;
        document.getElementById('header-level').textContent = profile.user.level;

        // XP bar mapping
        const xpNeeded = profile.user.level * 100;
        const currentXp = profile.user.xp;
        const xpPct = Math.round((currentXp / xpNeeded) * 100);
        
        document.getElementById('showcase-xp-bar').style.width = `${xpPct}%`;
        document.getElementById('showcase-xp-text').textContent = `${currentXp} / ${xpNeeded} XP`;

        // Check-in Button handling
        const checkinBtn = document.getElementById('daily-checkin-btn');
        const checkinMsg = document.getElementById('checkin-msg');
        
        const todayStr = new Date().toISOString().split('T')[0];
        if (profile.user.lastLogin === todayStr) {
            checkinBtn.disabled = true;
            checkinBtn.textContent = 'Reward Claimed Today';
            checkinBtn.style.opacity = '0.5';
        } else {
            checkinBtn.disabled = false;
            checkinBtn.textContent = 'Claim Daily Bonus';
            checkinBtn.style.opacity = '1';
            checkinBtn.onclick = async () => {
                try {
                    const checkinRes = await window.api.gameplay.dailyCheckin();
                    if (checkinRes.checkedIn) {
                        checkinBtn.disabled = true;
                        checkinBtn.textContent = 'Reward Claimed Today';
                        checkinBtn.style.opacity = '0.5';
                        checkinMsg.textContent = checkinRes.message;
                        checkinMsg.style.display = 'block';
                        // Reload showcase to show new XP/Level
                        setTimeout(loadShowcaseTab, 1500);
                    }
                } catch (e) {
                    console.error("Check-in error:", e);
                }
            };
        }

        // Render unlocked badges in the showcase UI
        const unlockedBadges = profile.achievements.map(a => a.badge_id);
        const allBadgeCards = document.querySelectorAll('.badge-card');
        
        allBadgeCards.forEach(card => {
            const badgeId = card.id.replace('badge-', '');
            if (unlockedBadges.includes(badgeId)) {
                card.classList.add('unlocked');
            } else {
                card.classList.remove('unlocked');
            }
        });

    } catch (err) {
        console.error("Showcase load error:", err);
    }
}

// Discovery Tab Load
let vocabularyCache = [];
async function loadDiscoveryTab() {
    try {
        const vocabList = await window.api.gameplay.getVocabulary();
        vocabularyCache = vocabList;
        const listDiv = document.getElementById('discovery-word-list');
        listDiv.innerHTML = '';

        if (!vocabList || !vocabList.length) {
            listDiv.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; padding: 10px;">Solve game rounds to discover words!</p>';
            return;
        }

        vocabList.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'vocab-item';
            row.innerHTML = `
                <div>
                    <span style="font-weight: 800; text-transform: uppercase;">${item.word}</span>
                    <span style="display: block; font-size: 0.7rem; color: var(--text-muted);">${item.category}</span>
                </div>
                <span style="font-size: 1.1rem;">👁️</span>
            `;
            row.onclick = () => {
                document.querySelectorAll('.vocab-item').forEach(el => el.classList.remove('active'));
                row.classList.add('active');
                showVocabularyDetails(item.word);
            };
            listDiv.appendChild(row);
        });

    } catch (err) {
        console.error("Vocab load error:", err);
    }
}

function showVocabularyDetails(word) {
    // Find metadata locally from window.WORDS_DATASET
    if (!window.WORDS_DATASET) return;
    
    let meta = null;
    // Walk categories/difficulties to find word matching
    for (let cat in window.WORDS_DATASET) {
        for (let diff in window.WORDS_DATASET[cat]) {
            const list = window.WORDS_DATASET[cat][diff];
            const found = list.find(w => w.word === word);
            if (found) {
                meta = { ...found, category: cat };
                break;
            }
        }
        if (meta) break;
    }

    // Fallback if it was a user custom word or not found in local dataset
    if (!meta) {
        meta = {
            word: word,
            meaning: 'Vocabulary logged via game round.',
            synonyms: ['N/A'],
            antonyms: ['N/A'],
            origin: 'Unknown / Custom source',
            fact: 'This word was discovered and added during play.',
            pronunciation: '/N/A/',
            category: 'gameplay'
        };
    }

    document.getElementById('discovery-empty-view').style.display = 'none';
    const view = document.getElementById('discovery-details-view');
    view.style.display = 'block';

    document.getElementById('discovery-word').textContent = meta.word;
    document.getElementById('discovery-pronunciation').textContent = meta.pronunciation;
    document.getElementById('discovery-category-badge').textContent = meta.category.toUpperCase();
    document.getElementById('discovery-meaning').textContent = meta.meaning;
    document.getElementById('discovery-synonyms').textContent = (meta.synonyms || []).join(', ');
    document.getElementById('discovery-antonyms').textContent = (meta.antonyms || []).join(', ');
    document.getElementById('discovery-origin').textContent = meta.origin;
    document.getElementById('discovery-fact').textContent = meta.fact;

    // Pronounce voice support using standard browser SpeechSynthesis
    document.getElementById('pronounce-btn').onclick = () => {
        const utter = new SpeechSynthesisUtterance(meta.word.toLowerCase());
        utter.rate = 0.85;
        window.speechSynthesis.speak(utter);
    };
}

// Custom Words Tab Load
async function loadCustomWordsTab() {
    setupCustomWordForm();
    await loadCustomWordsList();
}

function setupCustomWordForm() {
    const form = document.getElementById('custom-word-form');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const word = document.getElementById('custom-word').value;
        const category = document.getElementById('custom-category').value || 'Custom';
        const hint = document.getElementById('custom-hint').value;
        const meaning = document.getElementById('custom-meaning').value;

        try {
            await window.api.gameplay.addCustomWord({ word, category, hint, meaning });
            form.reset();
            loadCustomWordsList();
            alert('Custom word added!');
        } catch (error) {
            alert(error.message);
        }
    };
}

async function loadCustomWordsList() {
    try {
        const listDiv = document.getElementById('custom-words-list');
        const customWords = await window.api.gameplay.getCustomWords();
        listDiv.innerHTML = '';

        if (!customWords || !customWords.length) {
            listDiv.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">Your custom word list is empty.</p>';
            return;
        }

        customWords.forEach(item => {
            const div = document.createElement('div');
            div.className = 'custom-word-item';
            div.innerHTML = `
                <div>
                    <span style="font-weight: 800; text-transform: uppercase; color: var(--primary-color);">${item.word}</span>
                    <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">${item.category} • ${item.hint || 'No hint'}</span>
                </div>
                <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.75rem; color: var(--danger); border-color: var(--danger);" onclick="deleteCustomWord(${item.id})">Delete</button>
            `;
            listDiv.appendChild(div);
        });
    } catch (err) {
        console.error("Custom words list load failed:", err);
    }
}

window.deleteCustomWord = async function(id) {
    if (confirm('Delete this word?')) {
        try {
            await window.api.gameplay.deleteCustomWord(id);
            loadCustomWordsList();
        } catch (e) {
            alert(e.message);
        }
    }
};

// Platform Settings & Customization
function initSettingsUI() {
    // Theme options setup
    const themes = document.getElementsByName('setting-theme');
    const activeTheme = localStorage.getItem('theme') || 'light';
    
    themes.forEach(t => {
        if (t.value === activeTheme) t.checked = true;
        t.onchange = () => {
            applyTheme(t.value);
        };
    });
    applyTheme(activeTheme);

    // Sound setting
    const soundChk = document.getElementById('setting-sound');
    soundChk.checked = localStorage.getItem('sound_enabled') !== 'false';
    soundChk.onchange = () => {
        localStorage.setItem('sound_enabled', soundChk.checked);
    };

    // Keyboard assistance setting
    const assistChk = document.getElementById('setting-assist');
    assistChk.checked = localStorage.getItem('assist_enabled') !== 'false';
    assistChk.onchange = () => {
        localStorage.setItem('assist_enabled', assistChk.checked);
    };

    // Dyslexia Legibility Font setting
    const dyslexiaChk = document.getElementById('setting-setting-dyslexia') || document.getElementById('setting-dyslexia');
    if (dyslexiaChk) {
        dyslexiaChk.checked = localStorage.getItem('dyslexia_font') === 'true';
        if (dyslexiaChk.checked) {
            document.body.classList.add('dyslexia-font');
        }
        dyslexiaChk.onchange = () => {
            const active = dyslexiaChk.checked;
            localStorage.setItem('dyslexia_font', active);
            if (active) {
                document.body.classList.add('dyslexia-font');
            } else {
                document.body.classList.remove('dyslexia-font');
            }
        };
    }

    // Reset tutorial trigger button
    const resetTutorialBtn = document.getElementById('reset-tutorial-btn');
    if (resetTutorialBtn) {
        resetTutorialBtn.onclick = () => {
            localStorage.removeItem('tutorial_done');
            alert('Tutorial guide has been reset! Reloading...');
            window.location.reload();
        };
    }
}

function applyTheme(themeName) {
    document.body.classList.remove('dark-mode', 'light-mode', 'colorblind-mode', 'kids-mode');
    if (themeName === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (themeName === 'colorblind') {
        document.body.classList.add('colorblind-mode');
    } else if (themeName === 'kids') {
        document.body.classList.add('kids-mode');
    }
    localStorage.setItem('theme', themeName);
}

// Onboarding Walkthrough Tutorial logic
const TUTORIAL_STEPS = [
    {
        title: "Welcome to Hangman Quest!",
        content: "This is a premium educational word-building game. Learn vocabulary, etymology, and facts while playing!"
    },
    {
        title: "Diverse Game Modes",
        content: "Play the Classic game, challenge yourself with Timed Mode, carry limited hearts in Survival, or test your limits in Endless!"
    },
    {
        title: "Interactive Word Discovery",
        content: "Every guessed word is logged in your Vocabulary list. Visit the Discovery Center to review definitions, facts, and hear audio pronunciations!"
    }
];

let tutorialStep = 0;
function triggerOnboardingCheck() {
    const isDone = localStorage.getItem('tutorial_done');
    if (isDone === 'true') return;

    const overlay = document.getElementById('tutorial-overlay');
    const title = document.getElementById('tutorial-title');
    const content = document.getElementById('tutorial-content');
    const stepLbl = document.getElementById('tutorial-step-lbl');
    const skipBtn = document.getElementById('tutorial-skip');
    const nextBtn = document.getElementById('tutorial-next');

    overlay.style.display = 'flex';
    tutorialStep = 0;

    const updateTutorialCard = () => {
        title.textContent = TUTORIAL_STEPS[tutorialStep].title;
        content.textContent = TUTORIAL_STEPS[tutorialStep].content;
        stepLbl.textContent = `Step ${tutorialStep + 1} of ${TUTORIAL_STEPS.length}`;
        nextBtn.textContent = tutorialStep === TUTORIAL_STEPS.length - 1 ? 'Finish' : 'Next';
    };

    updateTutorialCard();

    nextBtn.onclick = () => {
        if (tutorialStep < TUTORIAL_STEPS.length - 1) {
            tutorialStep++;
            updateTutorialCard();
        } else {
            finishTutorial();
        }
    };

    skipBtn.onclick = () => {
        finishTutorial();
    };

    function finishTutorial() {
        overlay.style.display = 'none';
        localStorage.setItem('tutorial_done', 'true');
    }
}
