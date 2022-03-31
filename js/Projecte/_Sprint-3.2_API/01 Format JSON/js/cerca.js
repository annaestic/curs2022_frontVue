// Exercise 1: Get the array of all products.
function getAllProducts() {
    console.table(products);

}

// Exercise 2: Get the films of a certain director
function getProductsFromCategory(categoria) {
  
    const productesByCategory = products.filter(prod => prod.type == categoria);
    console.table(productesByCategory);
    return productesByCategory;
}

// Exercise 3: Get the Pooducts Popularity
function getProductsByPopularity(points) {
    const productesByCategory = products.filter(prod => prod.popularity == points);
    console.table(productesByCategory);
    return productesByCategory;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically() {

    let result = [];

    result = products.map(product => {
        return product.name;
    });

    result.sort();
    console.table(result);

}

// Exercise 5:  Alphabetic order by categiry
// Implementar la lògica per a ordenar els productes, aquest cop per categoria
function orderByCategory(){
    let result = [];

    result = products.map(product => {
        return product.type;
    });

    result.sort();
    console.table(result);
}

