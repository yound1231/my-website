// Theme toggle functionality with localStorage persistence

function initTheme() {
    // Get saved theme from localStorage, default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update button text and aria-label
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (themeToggle && themeIcon && themeText) {
        updateThemeButton(themeIcon, themeText, themeToggle, savedTheme);
    }
}

function updateThemeButton(themeIcon, themeText, button, theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
        button.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
        button.setAttribute('aria-label', 'Switch to dark mode');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update button
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (themeToggle && themeIcon && themeText) {
        updateThemeButton(themeIcon, themeText, themeToggle, newTheme);
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        
        // Ensure keyboard accessibility
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
    }
});
