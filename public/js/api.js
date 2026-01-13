const API_URL = '/api';

const api = {
    async fetch(endpoint, options = {}) {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            ...(token && token !== 'undefined' && token !== 'null' && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        };

        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers
        });

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error('Failed to parse JSON. Response text:', text);
            const snippet = text.substring(0, 50).replace(/</g, '&lt;');
            throw new Error(`Server returned invalid response (${response.status}): ${snippet}...`);
        }

        if (!response.ok) {
            console.error('API Error Response:', data);
            throw new Error(data.error || `Server error (${response.status})`);
        }
        return data;
    },

    auth: {
        login: (username, password) => api.fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        }),
        signup: (username, password) => api.fetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        }),
    },

    scores: {
        save: (scoreData) => api.fetch('/scores/save', {
            method: 'POST',
            body: JSON.stringify(scoreData)
        }),
        getHistory: () => api.fetch('/scores/history'),
        getLeaderboard: () => api.fetch('/scores/leaderboard'),
        clearHistory: () => api.fetch('/scores/clear', { method: 'DELETE' })
    }
};

window.api = api;
