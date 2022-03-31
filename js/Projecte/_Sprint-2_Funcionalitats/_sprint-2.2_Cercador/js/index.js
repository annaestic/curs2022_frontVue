//Total de la compra
var total = 0;



// Exercici 0: Mostrar cartList 
function ShowCartList() {
    // console.table(products);    
    console.table(cartList);
}

function showPrices() {
    console.table(subtotal);
}

function showCart() {
    console.table(cart);
}


// Exercise 1: Add found product to the cartList array
function buy(id) {
    // 1 ) Opcio 1: Suposant que id correspont amb la posició del array
   /*  cartList.push(products[id - 1]);
    console.log("element afegit"); */

    function buscaID(element){
        if (element.id== id){
            return element;
        }
    }

    // 2) Opcio 2: Seria més optim buscar el id del objecte producte amb l'id ( parametre que li hem passat a la funció )
     productBuy = products.find(buscaID)
    cartList.push(productBuy)
    console.table(cart);  

    // 3) Opcio 3: Simplifiquem amb arrow funcions =>
    //cartList.push(products.find((element) => element.id == id))
}


// Exercise 2: eliminem tots els productes de la CartList
function cleanCart() {

    // Eliminem element per element'
    /* while (cartList.length > 0) {
         cartList.pop();
    }*/

    // O podem fer també amb mètodes
    console.log(cartList.length);

    cartList.splice(0, cartList.length)

    // Mes eficient.
    carList.length = 0;

    cartList= [];

}

// Exercise 3: Segons els elements inclosos en la CartList, afegir els subtotals al array 
function calculateSubtotals() {

    /*var subtotals = {
            grocery: 0,
            beauty: 0,
            clothes: 0
        }; */

    /* PER AGAFAR DINAMOCAMENT ELS TIPUS DE PROUCTES
     
        tipus = Object.keys(subtotal); 
        for (var i = 0; i < cartList.length; i++) {
            tipus.forEach(element => {
                if (cartList[i].type == element) {
                    subtotal[element].value += cartList[i].price;
                }
            });
        } 
        
    */

    //Create a for loop on the "cartList" array 
    // 1. calculem els subtotals depenent del tipus de compra
    for (var i = 0; i < cartList.length; i++) {
        // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        switch (cartList[i].type) {
            case "grocery":
                subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
                break;
            case "beauty":
                subtotal.beauty.value += cartList[i].price;
                break;
            case "clothes":
                subtotal.clothes.value += cartList[i].price;
                break;
            default:
                console.log("Hi ha hagut un error");
        }
    }
}


// Exercise 4: Calculate total price of the cart either using the "cartList" array
function calculateTotal() {
    var total = 0;

    // Manera 01: tradicional
    /*     for (var i = 0; i < cartList.length; i++) {
            total = total + cartList[i].price
        } */

    // Manera 02: foreach
    /*     cartList.forEach(function(producte){total += producte.price;}); 
        console.log("Total:" + total); */

    // Manera 03: foreach i arrow function
    cartList.forEach((producte) => {
        total += producte.price;
    });

    console.log("Total:" + total);

}

/*  Exercise 5: Using the "cartlist" array that contains all the items in the shopping cart, 
    generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product. */

function generateCart() {

    for (var i = 0; i < cartList.length; i++) {
        const elemento = cartList[i];

        // amb l'include busquem l'element a la cart.
        if (!cart.includes(cartList[i])) {
            cart.push(elemento);
            // no podem agafar la i, pq sinó se'ns desborda .. agafem l'ultim element.
            cart[cart.length - 1].quantity = 1;
            cart[cart.length - 1].subtotal = cartList[i].price;
        } else {
            // el findIndex el fem servir pq ens torni l'id del objecte trobat.
            objIndex = cart.findIndex((obj => obj.id == cartList[i].id));
            cart[objIndex].quantity = cart[objIndex].quantity + 1;
            cart[objIndex].subtotal = cart[objIndex].subtotal + cartList[i].price;
        }
    }

    console.log("validem Cart");
    for (var i = 0; i < cart.length; i++) {
        console.log(cartList[i].name);
    }
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    /* Per a ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.
    Per a això, el client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce:    
    - Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.    
    - En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.            
    En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep el array cart, modificant el camp subtotalWithDiscount en cas que es s'apliqui promoció. D'aquesta manera les promocions apareixeran per producte, no sols en els subtotales!
    */

    //Generem la Cart sense repetits
    for (var i = 0; i < cart.length; i++) {
        /* Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros. */
        if ((cart[i].id == 1) && (cart[i].quantity >= 3)) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            console.log("ha comprat 3 o més ampolles d'oli. Afegir descompte");
        }
        /* En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3. */
        if ((cart[i].id == 3) && (cart[i].quantity >= 10)) {
            cart[i].subtotalWithDiscount = cart[i].quantity * ((cart[i].price) * 2) / 3;
            console.log("ha comprat 10 o més mescles de pastis. Afegir descompte");
        }
    }
}

// Exercise 7: Eliminem un producte de la Cart
function removeFromCart(id) {
    // Estic passant com a paràmtre el producte 1
    // Busquem si el producte està a la cart
    let objIndex = cart.findIndex((obj => obj.id == products[id - 1].id));
    if (objIndex != -1) {
        cart.splice(objIndex, 1);
        console.log("Eliminat producte de la cart: " + products[id - 1].name);
    } else {
        console.log("El producte no està al teu carret: " + products[id - 1].name);
    }
}

// Exercise 8
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
        var discount = null;

        if (cart[i].subtotalWithDiscount != null) {
            discount = "( con descuento " + cart[i].subtotalWithDiscount + " )";
            contenido = cart[i].quantity + " x " + cart[i].name + " " + cart[i].price + " = " + cart[i].subtotal + "€ " + discount + "<br>";
        } else {
            contenido = cart[i].quantity + " x " + cart[i].name + " " + cart[i].price + " = " + cart[i].subtotal + "€ " + "<br>";
        }

        document.write(contenido)

        // Amb DOM
        // per insertar un contingut al li, primer hem de crear un textnode
        var textnode = document.createTextNode(contenido);
        li.appendChild(textnode);
        document.querySelector("#list").appendChild(li);
    }
}