// Utiliser les promesse

// Une promesse est un objet utilisé pour faire des traitement asynchrone pour avoir une valeur tout de suite, plus tard ou jamais.

// Une promesse contenue dans une constante

const db = new Promise((resolve, reject) => {

    resolve('OK');      // Si la promesse aboutie correctement
    reject('ERROR');    // Si la promesse aboutie par une erreur

});



// Une promesse dans une fonction

function test() {

    // L'utilisation d'une promesse dans une fonction doit être retourné "return"
    return new Promise((resolve, reject) => {

        resolve('OK');      // Si la promesse aboutie correctement
        reject('ERROR');    // Si la promesse aboutie par une erreur

    });
};



// Utilisation d'une promesse contenue dans une constante

db.then((value) => {        // Traitement lorsque la promesse aboutie correctement

    console.log(promiseIntro + " resolve " + value + " from db");

}).catch((value) => {       // Traitement lorsque la promesse aboutie par une erreur

    console.log(promiseIntro + " reject " + value + " from db");
});



// Utilisation d'une promesse contenue dans une fonction

test().then((value) => {    // Traitement lorsque la promesse aboutie correctement

    console.log(promiseIntro + " resolve " + value + " from test");

}).catch((value) => {       // Traitement lorsque la promesse aboutie par une erreur

    console.log(promiseIntro + " reject " + value + " from test");

});