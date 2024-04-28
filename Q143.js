/*
Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
*/
var myPromise = new Promise(function (resolve, reject) {
    // Simulate an asynchronous operation
    var randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve("Success!");
    }
    else {
        reject("Error occurred!");
    }
});
myPromise
    .then(function (result) {
    console.log("Promise resolved:", result);
})
    .catch(function (error) {
    console.error("Promise rejected:", error);
});
