import { supabase } from './supabase.js';

const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    message.textContent = error.message;
  } else {
    message.textContent = 'Zalogowano!';
    window.location.href = '/profile.html'; // <- Po zalogowaniu przenosi na profil
  }
});
