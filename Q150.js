/*
Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

*/
// Synchronous code
console.log("Start");
console.log("Middle");
console.log("End");
// Asynchronous code with a callback (setTimeout)
console.log("Start");
setTimeout(function () {
    console.log("Callback executed after 2 seconds");
}, 2000);
console.log("End");
