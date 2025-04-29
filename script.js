document.addEventListener("DOMContentLoaded", function() {
  // Przykładowe dane ogłoszeń
  const ogloszenia = [
    { title: "Liquid z Aromatem Mango", description: "Dobrej jakości liquid 50ml.", price: "45 PLN" },
    { title: "Używany Vaporesso Luxe", description: "W dobrym stanie, mało używany.", price: "150 PLN" },
    { title: "Grzałki do RTA", description: "Wielokrotnego użytku, kilka sztuk.", price: "30 PLN" }
  ];

  const ogloszeniaLista = document.getElementById('ogloszenia-lista');
  
  ogloszenia.forEach(ogloszenie => {
    const item = document.createElement('div');
    item.classList.add('ogloszenie');
    item.innerHTML = `
      <h3>${ogloszenie.title}</h3>
      <p>${ogloszenie.description}</p>
      <p><strong>${ogloszenie.price}</strong></p>
    `;
    ogloszeniaLista.appendChild(item);
  });
});
