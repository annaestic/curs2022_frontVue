async function calcula() {
    let sum = 0;
    console.log("Comencem a calcular");
    setTimeout(function () {
        sum = 4 + 5 +'b';
        if (isNaN(sum)) {            
            console.log('Error while calculating sum.');
            return "error";
            
        } else {
            console.log(sum);
            return sum;
        }
    }, 2000);
};

async function inici() {
    sum = await calcula();
    sum = await calcula();
    console.log("Crida a calcula() acabada ");
}

inici();
console.log("ACABAT EL PROGRAMA PRINCIPAL");