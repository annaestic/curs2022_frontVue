//Inicialitzem prodcutes
var products;

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