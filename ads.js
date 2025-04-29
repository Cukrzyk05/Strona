import { supabase } from './supabase.js';

export async function initializeAds() {
  const { data, error } = await supabase
    .from('ogloszenia')
    .select('*');

  if (error) {
    console.error('Błąd:', error);
  } else {
    console.log('Ogłoszenia:', data);
  }
}
