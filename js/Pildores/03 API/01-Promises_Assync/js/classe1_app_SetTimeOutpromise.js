// Amb arrow function
const calcula = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sum = 4 + 5 + 'a';
        if (isNaN(sum)) {
            reject('Error while calculating sum.');
        } else {
            resolve(sum);
        }
    }, 2000);
}); 

calcula
.then(result => {
    console.log("Retorna")
    console.log(result);
})
.then(result => {
    console.log("Retorna")
    console.log(result);
})
.then(result => {
    console.log("Retorna")
    console.log(result);
})
.catch(error =>  {
    console.log(error);
});

/* const calcula = new Promise(function (resolve, reject) {
    console.log("calcula ()")
    setTimeout(function () {
        const sum = 4 + 5 + b;
        if (isNaN(sum)) {
            reject('Error while calculating sum.');
        } else {
            resolve(sum);
        }
    }, 2000);
});
 */
/* calcula.then(function (result) {
    console.log("Retorna")
    console.log(result);
}) */

/* calcula.then(function (result) {
    console.log("Retorna")
    console.log(result);
}).catch(function (error) {
    console.log(error);
});

console.log("acaba");
 */








