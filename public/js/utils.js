function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('dark-mode', 'light-mode', 'colorblind-mode', 'kids-mode');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'colorblind') {
        document.body.classList.add('colorblind-mode');
    } else if (savedTheme === 'kids') {
        document.body.classList.add('kids-mode');
    }

    // Load dyslexia font setting
    const activeDyslexia = localStorage.getItem('dyslexia_font') === 'true';
    if (activeDyslexia) {
        document.body.classList.add('dyslexia-font');
    } else {
        document.body.classList.remove('dyslexia-font');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Auto-add theme toggle mapping if exists (fallback helper)
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.onclick = () => {
            const current = localStorage.getItem('theme') || 'light';
            const next = current === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            initTheme();
        };
    }
});
