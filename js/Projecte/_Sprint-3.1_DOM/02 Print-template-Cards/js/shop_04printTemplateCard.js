// Ara, anem a PRintar la card, segons un template
// Aprenentges:
// Crear un element DOM de manera dinàmica
// Entendre concepte de template

const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

// Pintar tots els productes
function pintarCardsProducts() {
    products.forEach(item => {        
        templateCard.querySelector('.cardProduct').setAttribute('id', 'card' + item.id );
        templateCard.querySelector('ul .cardAdd').setAttribute('data-id', item.id);
        templateCard.querySelector('ul .cardRemove').setAttribute('data-id', item.id);
        templateCard.querySelector('img').setAttribute('src', item.img);
        templateCard.querySelector('h5').textContent = item.name
        templateCard.querySelector('p').textContent = item.price
        templateCard.querySelector('h6').textContent = item.type        
        const clone = templateCard.cloneNode(true)
        // se guarda en memoria, de momento no se printa
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

document.addEventListener('DOMContentLoaded', () => {
    pintarCardsProducts();
});