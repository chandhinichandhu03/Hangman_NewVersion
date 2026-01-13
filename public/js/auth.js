document.addEventListener('DOMContentLoaded', () => {
    // Check if already logged in
    if (localStorage.getItem('token')) {
        window.location.href = '/dashboard.html';
        return;
    }

    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    // Toggle forms
    showSignup.onclick = (e) => {
        e.preventDefault();
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    };

    showLogin.onclick = (e) => {
        e.preventDefault();
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    };

    // Handle Login
    document.getElementById('login-form').onsubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const errorDiv = document.getElementById('login-error');

        try {
            const data = await window.api.auth.login(username, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            window.location.href = '/dashboard.html';
        } catch (error) {
            errorDiv.textContent = error.message;
            errorDiv.style.display = 'block';
        }
    };

    // Handle Signup
    document.getElementById('signup-form').onsubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const errorDiv = document.getElementById('signup-error');

        try {
            await window.api.auth.signup(username, password);
            // After successful signup, log them in or show login
            const data = await window.api.auth.login(username, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            window.location.href = '/dashboard.html';
        } catch (error) {
            errorDiv.textContent = error.message;
            errorDiv.style.display = 'block';
        }
    };
});
