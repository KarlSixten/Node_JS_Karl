// JavaScript is single-threaded, everything runs on the main-thread

// database interaction, file handling, fetch / HTTP requests (network)

// Solution 1: callback functions

// callback hell, pyramid of doom

// Solution 2: promises (syntactic sugar for callbacks)

// Problem: Nested promises

// Solution 3: async/await

// pending, fulfilled(resolved / rejected)

// new Promise((resolve, reject) => {
//     //Simuler noget der tager tid
//     setTimeout(() => {
//         try {
//             throw "Oops, an error occured"
//             resolve("Everything went well");
//         } catch (error){
//             reject(error);
//         }

//     }, 2000);
// })
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something good");
            } catch (error) {
                reject("Something bad");
            }

        }, 2000);
    })
}

myPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve("Data from the server"))
            })
        }, 2500)
    })
}

myFetch()
    .then((response) => response.json())
    .then((result) => console.log(result));

// IIFE
(async function executeFetch() {
    const repsonse = await myFetch();
    const result = await response.json();
    console.log(result);
})();