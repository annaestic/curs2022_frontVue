document.querySelectorAll(".cardAdd").forEach(function(element) {
	element.addEventListener('click', function() {
		var dataID = element.getAttribute('data-id');
        addToCart(dataID);
	});
});

document.querySelectorAll(".cardRemove").forEach(function(element) {
	element.addEventListener('click', function() {
		var dataID = element.getAttribute('data-id');
        removeFromCart(dataID);
	});
});

// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cart = [];

// Improved version of cart. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};

var subtotals = {
    grocery: 0,
    beauty: 0,
    clothes: 0
};

var total = 0;


// Exercise 2
function cleanCart() {

    //Abans de esborrar, revisem tots els elements que hi ha a la CardList
    for (var i = 0; i < cart.length; i++) {
        console.log(cart[i].name);
    }

    // Eliminem element per element'
    while (cart.length > 0) {
        cart.pop();
    }

    console.log("llista esborrada");
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cart" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes


    // calculem els subtotals depenent del tipus de compra
    for (var i = 0; i < cart.length; i++) {
        switch (cart[i].type) {
            case "grocery":
                subtotals["grocery"] = subtotals["grocery"] + cart[i].price;
                break;
            case "beauty":
                subtotals["beauty"] = subtotals["beauty"] + cart[i].price;
                break;
            case "clothes":
                subtotals["clothes"] = subtotals["clothes"] + cart[i].price;
                break;
            default:
                console.log("Hi ha hagut un error");
        }
    }

    console.log("grocery: " + subtotals["grocery"]);
    console.log("beauty: " + subtotals["beauty"]);
    console.log("clothes: " + subtotals["clothes"]);

}

// Exercise 4
function calculateTotal() {

    // Calculate total price of the cart either using the "cart" array
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price
    }
    console.log("Total:" + total);
    console.log("\n");

}


// Exercise 6
function applyPromotionsCart(id) {
    // Apply promotions to each item in the array "cart"
    /* Per a ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.
    Per a això, el client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce:    
    - Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.    
    - En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.            
    En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep el array cart, modificant el camp subtotalWithDiscount en cas que es s'apliqui promoció. D'aquesta manera les promocions apareixeran per producte, no sols en els subtotales!
    */

    /* Si l'usuari compra 3 o més ampolles d'oli (id:1), el preu del producte descendeix a 10 euros. */
    if ((cart[id].quantity >= 3) && (cart[id].id == 1)) {
        cart[id].subtotalWithDiscount = cart[id].quantity * 10;
        console.log("ha comprat 3 o més ampolles d'oli. Preu total amb descompte:" + cart[id].subtotalWithDiscount);
        console.log("\n");
    }
    /* En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3. */
    if ((cart[id].quantity >= 10) && (cart[id].id == 3)) {
        cart[id].subtotalWithDiscount = cart[id].quantity * ((cart[id].price) * 2) / 3;
        console.log("ha comprat 10 o més mescles de pastis. Preu total amb descompte:" + cart[id].subtotalWithDiscount);
        console.log("\n");
    }
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    // El findIndex el fem servir pq ens torni l'id del objecte trobat. No ho he sabut fer amb el vanilla javascript 
    // Amb findIndex busquem totes les vegades que ho troba dins l'array
    let objIndex = cart.findIndex((obj => obj.id == products[id - 1].id));

    if (objIndex == -1) {
        //Si no està a la cart, l'afegim
        // no podem agafar la i, pq sinó se'ns desborda .. agafem l'ultim element.
        cart.push(products[id - 1]);
        cart[cart.length - 1].quantity = 1;
        cart[cart.length - 1].subtotal = products[id - 1].price;
        console.log("Afegit nou producte " + products[id - 1].name);
        alert("Afegit nou producte " + products[id - 1].name)
    } else {
        // Si està a la cart, actualitzem
        cart[objIndex].quantity = cart[objIndex].quantity + 1;
        cart[objIndex].subtotal = cart[objIndex].subtotal + cart[objIndex].price;
        console.log("Modificat producte de la llista " + cart[objIndex].name);
        alert("Modificat producte de la llista " + cart[objIndex].name)
    }

    calculateSubtotals();
    calculateTotal();
    if (objIndex != -1) applyPromotionsCart(objIndex);

}

// Exercise 9
function removeFromCart(id) {
    // Estic passant com a paràmtre el producte 1
    // Busquem si el producte està a la cart
    let objIndex = cart.findIndex((obj => obj.id == products[id - 1].id));
    if (objIndex != -1) {
        cart.splice(objIndex, 1); 
        console.log("Eliminat producte de la cart: " + products[id - 1].name);
        alert("Eliminat producte de la cart: " + products[id - 1].name)
    } else {
        alert("Aquest element no el tens al carret")
    }
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // el html de la modal està a shop.html

    // Busquem l'element per id no per class.
    var lista = document.getElementById('list');

    //netejem la llista, sinó va afegint cada vegada que entre i sortim
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (var i = 0; i < cart.length; i++) {        
        var li = document.createElement("li");
        var discount= null;

        if (cart[i].subtotalWithDiscount != null)  {
            discount="( con descuento " + cart[i].subtotalWithDiscount + " )";
            contenido = cart[i].quantity + " x " + cart[i].name + " " + cart[i].price + " = " +  cart[i].subtotal + "€ " + discount ;
        }else{
            contenido = cart[i].quantity + " x " + cart[i].name + " " + cart[i].price + " = " +  cart[i].subtotal + "€ "  ;
        }    
        
        // per insertar un contingut al li, primer hem de crear un textnode
        var textnode = document.createTextNode(contenido);         
        li.appendChild(textnode);
        document.querySelector("#list").appendChild(li);        
    }
}
