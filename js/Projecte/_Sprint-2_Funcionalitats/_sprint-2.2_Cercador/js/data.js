// Array d'objectes productes
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        popularity: 4
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        popularity: 4
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        popularity: 3
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
        popularity: 4
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        popularity: 1
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        popularity: 1
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
        popularity: 4,
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        popularity: 4,
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        popularity: 3
    }
]

var cart=[];

// Array de la llista de la compra
var cartList = [];

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
    }
};