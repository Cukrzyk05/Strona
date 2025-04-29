// app.js

// Importowanie funkcji z innych plików
import { initializeAds } from './ads.js';
import { initializeSupabase } from './supabase.js';

// Uruchomienie wszystkich funkcji aplikacji
function startApp() {
  initializeAds();  
  initializeSupabase();
}

// Uruchomienie aplikacji
startApp();