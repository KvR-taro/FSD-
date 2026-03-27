// Simulated JWT generation
function generateFakeToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' + 
           btoa(JSON.stringify({ user: 'admin', role: 'student', exp: Date.now() + 3600 })) + 
           '.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
}

function updateUI() {
    const token = localStorage.getItem('authToken');
    const loginView = document.getElementById('loginView');
    const dashboard = document.getElementById('dashboard');
    const tokenViewer = document.getElementById('tokenViewer');

    if (token) {
        // User is logged in
        loginView.style.display = 'none';
        dashboard.style.display = 'block';
        tokenViewer.textContent = token;
    } else {
        // User is logged out
        loginView.style.display = 'block';
        dashboard.style.display = 'none';
    }
}

function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Super simple fake authentication check
    if (user === 'admin' && pass === 'password') {
        errorMsg.style.display = 'none';
        
        // 1. Generate fake token
        const token = generateFakeToken();
        
        // 2. IMPORTANT LAB STEP: Store in Web Storage API
        localStorage.setItem('authToken', token);
        sessionStorage.setItem('tempState', 'logged_in');
        
        // 3. Update view
        updateUI();
    } else {
        errorMsg.style.display = 'block';
    }
}

function handleLogout() {
    // 1. IMPORTANT LAB STEP: Clear from Web Storage API
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('tempState');
    
    // Clear inputs
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    
    // 2. Update view
    updateUI();
}

// Check state on page load
window.onload = updateUI;
