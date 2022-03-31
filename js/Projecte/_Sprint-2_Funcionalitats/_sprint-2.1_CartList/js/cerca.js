// Exercise 1: Get the array of all products.
function getAllProducts() {
    console.table(products);

}

// Exercise 2: Get the films of a certain director
function getProductsFromCategory(array, director) {
    const films = array.filter(movie => movie.director == director);
    console.table(films);
    return films;
}