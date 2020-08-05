// Use promises

// A promise is an object used to make asynchronous treatment to get value now, later or never.


// Promise contained in constante

const db = new Promise((resolve, reject) => {

    resolve('OK');      // If the promise done correctly
    reject('ERROR');    // If the promise done by an error

});



// Promise in a function

function test() {

    // A Promise use in a function must be return "return"
    return new Promise((resolve, reject) => {

        resolve('OK');      // If the promise done correctly
        reject('ERROR');    // If the promise done by an error

    });
};



// Use a promise contained in a constante

db.then((value) => {        // Treatment when the promise done correctly

    console.log(promiseIntro + " resolve " + value + " from db");

}).catch((value) => {       // Treatment when the promise done by an error

    console.log(promiseIntro + " reject " + value + " from db");
});



// Use a promise contained in a function

test().then((value) => {    // Treatment when the promise done correctly

    console.log(promiseIntro + " resolve " + value + " from test");

}).catch((value) => {       /// Treatment when the promise done by an error

    console.log(promiseIntro + " reject " + value + " from test");

});