// Array with products (objects) added directly with push(). Products in this array are repeated.
var cart = [];

var products = [{
    id: 1,
    name: 'oil',
    price: 10.5,
    type: 'grocery',
    img: 'assets/img/shop_01.jpg'
},
{
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
    img: 'assets/img/shop_02.jpg'
},
{
    id: 3,
    name: 'cupcake',
    price: 5,
    type: 'grocery',
    img: 'assets/img/shop_03.jpg'
},
{
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty',
    img: 'assets/img/shop_04.jpg'
},
{
    id: 5,
    name: 'Make-up',
    price: 20.5,
    type: 'beauty',
    img: 'assets/img/shop_05.jpg'
},
{
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty',
    img: 'assets/img/shop_06.jpg'
},
{
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes',
    img: 'assets/img/shop_07.jpg'
},
{
    id: 8,
    name: 'Lawn-Chiffon',
    price: 19.99,
    type: 'clothes',
    img: 'assets/img/shop_08.jpg'
},
{
    id: 9,
    name: 'Toddler',
    price: 9.99,
    type: 'clothes',
    img: 'assets/img/shop_09.jpg'
}
]


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