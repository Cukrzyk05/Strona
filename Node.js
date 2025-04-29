// index.js (Backend)
import { supabase } from './supabase.js';

async function getOgloszenia() {
  const { data, error } = await supabase
    .from('ads')
    .select('*');

  if (error) {
    console.error('Błąd podczas pobierania danych:', error.message);
  } else {
    console.log('Dane z tabeli ads:', data);
  }
}

getOgloszenia();
