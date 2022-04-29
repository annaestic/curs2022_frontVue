// PRINTEM CARDS
// ARA PRINTEM CARDS DE MANERA DINAMICA sobre l'objecte products (data.js)
// APrenentages : 
// 1 Com fer servir el foreach 

document.addEventListener('DOMContentLoaded', () => {
    pintarCardsProducts();
});

// Pintar tots els productes
function pintarCardsProducts() {
    products.forEach(item => {
        const card = document.getElementById('card'+ item.id);
        card.querySelector('img').setAttribute('src', item.img);
        card.querySelector('h5').textContent = item.name
        card.querySelector('p').textContent = item.price
        card.querySelector('h6').textContent = item.type
    })
}