/*
Question 144: Explain the use of the Promise.all() method with an example.
*/
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 1 resolved');
    }, 1000);
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 2 resolved');
    }, 2000);
});
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 3 resolved');
    }, 3000);
});
Promise.all([promise1, promise2, promise3])
    .then(function (results) {
    console.log('All promises resolved:', results);
})
    .catch(function (error) {
    console.error('Something went wrong:', error);
});
