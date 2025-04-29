import { supabase } from './supabase.js';

async function addAd() {
  const { data, error } = await supabase
    .from('ads')
    .insert([
      { 
        user_id: 'a7778f90-9c58-460f-b94f-5a5a87fa79fe',  // Użyj prawdziwego UUID
        title: 'Ogłoszenie 1', 
        description: 'Opis ogłoszenia 1', 
        price: 100,      // Przykładowa cena
        category: 'Kategoria 1', // Przykładowa kategoria
        status: 'active',
        tags: [],
        condition: 'new',
        location: 'Warszawa'
      }
    ]);

  if (error) {
    console.error('Błąd dodawania ogłoszenia:', error);
  } else {
    console.log('Ogłoszenie dodane:', data);
  }
}

addAd();
