/*
Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
*/
var mypromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("hello world");
    }, 2000);
});
mypromise.then(function (result) {
    console.log(result);
});
