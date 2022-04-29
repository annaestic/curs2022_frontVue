async function calcula() {
    let sum = 0;
    console.log("Comencem a calcular");
    setTimeout(function () {
        sum = 4 + 5 + 'b';
        if (isNaN(sum)) {
            console.log('Error while calculating sum.');
        } else {
            console.log(sum);
        }
    }, 2000);
};

async function inici() {
    try {
        await calcula();
        await calcula();
        await calcula();
        await calcula();
    } catch (error) {
        console.log(error)
    }
}

inici();
console.log("ACABAT EL PROGRAMA PRINCIPAL");
console.log(2 + 2);