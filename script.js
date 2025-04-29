// Otwieranie i zamykanie modali
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

registerBtn.addEventListener('click', () => {
  registerModal.style.display = 'block';
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  });
});

// Zamknięcie modala po kliknięciu poza jego obszar
window.onclick = function(event) {
  if (event.target === loginModal || event.target === registerModal) {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  }
};
