// PRINTEM CARDS
// ARA PRINTEM 9 CARDS DE MANERA DINAMICA, 
// PEr entendre com funciona
// Aprenentages : 
// 1 Com construim la card1,card2, card3... 9 de manera dinàmica al carregar la plana

document.addEventListener('DOMContentLoaded', () => {
    pintarCards();
});


// Pintar tots els productes
function pintarCards() {
    for (let i= 1; i < 10; i++) {
        const card = document.getElementById('card'+ i);
        card.querySelector('img').setAttribute("src", './assets/img/shop_0'+ i + '.jpg');
        card.querySelector('h5').textContent = 'cooking oil'
        card.querySelector('p').textContent = '$250.00'
        card.querySelector('h6').textContent = '-Grocery-'        
    }    
}

