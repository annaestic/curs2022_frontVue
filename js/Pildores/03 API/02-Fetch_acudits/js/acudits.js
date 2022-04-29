
function fetchPromise(url) {
    //Al fer sol·licitud HTTP com a operació asíncrona, Fetch no retornarà cap dada, tornarà una promesa de resposta.     
    const fetchPromise = fetch(url);

    //Quan registrem la resposta, mostrarà que aquesta promesa està en estat pendent. 
    //Això vol dir que la resposta HTTP que esperem es farà, 
    //però en el moment de registrar, aquesta resposta no estava preparada per registrar-se.
    //Ara pot passar a un estat complert si tot va bé o a un estat rebutjat si hi ha un error durant l'obtenció. 
    //Un cop resolta la Promesa, ja no pot canviar d'estat.
    console.log(fetchPromise);


    // Utilitzem el mètode Promise.prototype.then per retornar una resposta un cop s'hagi complert la nostra promesa.    
    // Estem registrant la resposta, per veure quina informació rebem de l'API.     
    // hauríem d'obtenir un objecte de resposta amb informació que inclou capçaleres, cos, tipus i fins i tot codi d'estat.
    fetchPromise.then(response => response.json())
        //Quan rebem resposta de q l'API funciona, continuem per obtenir el cos de la resposta => Cridant el mètode json().
        //el mètode json(), també és asíncron, per tant tb retorna una Promesa. 
        .then(json => {
            // This is the JSON from our response, accedim al node on esta l'acudit.               
            console.log(json);
            let acudit = json.attachments[0].text;
            document.getElementById("acudit").innerHTML = acudit;
            console.log(acudit);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
            document.getElementById("acudit").innerHTML = err;
        });
}

function nouacudit() {
    // canviem imatge de fons de la capa segons random de 0 a 9
    let numImage = Math.floor(Math.random() * 10);
    document.getElementById("fons").style.backgroundImage = "url('/images/fons" + numImage + ".svg')";

    // Cridem a una funció que farà la promesa i el Fetch
    url = "https://icanhazdadjoke.com/slack"
    fetchPromise(url);

}