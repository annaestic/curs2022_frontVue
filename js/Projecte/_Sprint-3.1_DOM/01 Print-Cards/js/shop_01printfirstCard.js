// PRINTEM CARDS
// COMENCEM PER PRINTAR LA card1
// PEr entendre com funciona
// APrenentages : 
// 1 EVEnt , LOAD  DOMContentLoaded
// 2 Com construim la car1
// 3 Com modifiquem contingut dinàmicament


// Pintar 1er producto

const card = document.getElementById('card1')

function firstCard() {
    card.querySelector('img').setAttribute("src", './assets/img/shop_01.jpg');
    card.querySelector('h5').textContent = 'oil ';
    card.querySelector('p').textContent = '10€';
    card.querySelector('h6').textContent = '-Grocery-';
}

document.addEventListener('DOMContentLoaded', () => {
   firstCard();   
});

// Revisar que el data.js i el index.html l'he canviat. 
// - He afegit imatge al data.js
// - He moificat el html del producte
//  <div class="card-body">
//      <h5 class="font-weight-normal text-center">fffdddd</h5>
//      <h6 class="font-weight-normal text-center">aaaadddd</h6>
//      <p class="text-center mb-0 text-center"></p>
//  </div>
// El pas shop_02printCard, potser no cal.

