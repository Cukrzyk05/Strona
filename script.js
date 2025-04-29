// Logowanie i Rejestracja
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Formularz logowania');
});

document.querySelector('.register-btn').addEventListener('click', function() {
    alert('Formularz rejestracji');
});

// Zmiana motywu
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Zmieniamy ikonę przycisku
    themeToggleButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});
