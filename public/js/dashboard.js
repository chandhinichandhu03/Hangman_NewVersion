document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (!token) {
        window.location.href = '/index.html';
        return;
    }

    document.getElementById('welcome-msg').textContent = `Welcome, ${username}`;

    // Difficulty selection
    const diffBtns = document.querySelectorAll('.difficulty-btn');
    diffBtns.forEach(btn => {
        btn.onclick = () => {
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            localStorage.setItem('game_difficulty', btn.dataset.value);
        };
    });

    // Default difficulty
    if (!localStorage.getItem('game_difficulty')) {
        localStorage.setItem('game_difficulty', 'easy');
    }

    // Category selection
    const categorySelect = document.getElementById('game-category');
    categorySelect.onchange = () => {
        localStorage.setItem('game_category', categorySelect.value);
    };
    localStorage.setItem('game_category', categorySelect.value);

    // Logout
    document.getElementById('logout-btn').onclick = () => {
        localStorage.clear();
        window.location.href = '/index.html';
    };

    // Clear History
    const clearBtn = document.getElementById('clear-history-btn');
    if (clearBtn) {
        clearBtn.onclick = async (e) => {
            if (confirm('Are you sure you want to clear all your quest history?')) {
                try {
                    await window.api.scores.clearHistory();
                    displayHistory([]);
                    // Refresh leaderboard
                    const leaderboard = await window.api.scores.getLeaderboard();
                    displayLeaderboard(leaderboard);
                    alert('History cleared successfully!');
                } catch (error) {
                    console.error('Clear Error:', error);
                    alert('Error: ' + error.message);
                }
            }
        };
    }

    // Load Data
    try {
        const [history, leaderboard] = await Promise.all([
            window.api.scores.getHistory(),
            window.api.scores.getLeaderboard()
        ]);

        displayHistory(history);
        displayLeaderboard(leaderboard);
    } catch (error) {
        console.error('Error loading data:', error);
    }
});

function displayHistory(history) {
    const list = document.getElementById('history-list');
    if (!history.length) {
        list.innerHTML = '<p style="color: var(--text-muted);">No quests played yet.</p>';
        return;
    }

    list.innerHTML = history.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--glass-border);">
            <div>
                <span style="display: block; font-weight: 600;">${item.category} (${item.difficulty})</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${new Date(item.played_at).toLocaleDateString()}</span>
            </div>
            <div style="text-align: right;">
                <span style="color: ${item.result === 'win' ? 'var(--success)' : 'var(--danger)'}; font-weight: 800;">${item.score} pts</span>
            </div>
        </div>
    `).join('');
}

function displayLeaderboard(leaderboard) {
    const list = document.getElementById('leaderboard-list');
    if (!leaderboard.length) {
        list.innerHTML = '<p style="color: var(--text-muted);">Join the leaderboard!</p>';
        return;
    }

    list.innerHTML = leaderboard.map((item, index) => `
        <div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--glass-border);">
            <span style="width: 24px; font-weight: 800; color: var(--primary-color);">#${index + 1}</span>
            <span style="flex: 1;">${item.username}</span>
            <span style="font-weight: 800;">${item.high_score}</span>
        </div>
    `).join('');
}
