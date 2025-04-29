import { supabase } from './supabase.js';

const registerForm = document.getElementById('register-form');
const message = document.getElementById('message');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    message.textContent = error.message;
  } else {
    message.textContent = 'Rejestracja zakończona! Sprawdź email.';
  }
});
