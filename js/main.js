import { supabase } from './supabase.js';  // Upewnij się, że ścieżka do pliku jest poprawna

// Funkcja do pobierania ogłoszeń
async function getOgloszenia() {
  try {
    const { data, error } = await supabase
      .from('ads')  // Sprawdź, czy masz tabelę o nazwie 'ads'
      .select('*'); // Wybiera wszystkie kolumny z tabeli

    if (error) {
      // Jeśli wystąpił błąd, wypisz go w konsoli
      console.error('Błąd podczas pobierania danych:', error.message);
    } else {
      // Jeśli dane zostały pomyślnie pobrane, wypisz je
      console.log('Dane z tabeli ads:', data);
      // Funkcja do wyświetlania danych w HTML
      displayOgloszenia(data);
    }
  } catch (err) {
    // Obsługa błędów w przypadku problemów z połączeniem
    console.error('Wystąpił błąd:', err.message);
  }
}

// Funkcja do wyświetlania ogłoszeń na stronie
function displayOgloszenia(ogloszenia) {
  const ogloszeniaContainer = document.getElementById('ogloszeniaContainer'); // Kontener w HTML na ogłoszenia

  // Sprawdź, czy mamy dane
  if (ogloszenia.length === 0) {
    ogloszeniaContainer.innerHTML = '<p>Brak ogłoszeń.</p>';
    return;
  }

  // Wyczyść poprzednie dane
  ogloszeniaContainer.innerHTML = '';

  // Przejdź przez wszystkie ogłoszenia i wyświetl je
  ogloszenia.forEach(ogloszenie => {
    const ogloszenieElement = document.createElement('div');
    ogloszenieElement.classList.add('ogloszenie');  // Klasa CSS dla ogłoszenia

    ogloszenieElement.innerHTML = `
      <h3>${ogloszenie.title}</h3>
      <p>${ogloszenie.description}</p>
      <p><strong>Cena:</strong> ${ogloszenie.price} PLN</p>
      <p><strong>Kategoria:</strong> ${ogloszenie.category}</p>
      <p><strong>Lokalizacja:</strong> ${ogloszenie.location}</p>
      <p><strong>Status:</strong> ${ogloszenie.status}</p>
      <p><strong>Stan:</strong> ${ogloszenie.condition}</p>
      <p><strong>Tags:</strong> ${ogloszenie.tags.join(', ')}</p>
      <p><strong>Data utworzenia:</strong> ${new Date(ogloszenie.created_at).toLocaleString()}</p>
    `;

    ogloszeniaContainer.appendChild(ogloszenieElement);
  });
}

// Wywołanie funkcji
getOgloszenia();
