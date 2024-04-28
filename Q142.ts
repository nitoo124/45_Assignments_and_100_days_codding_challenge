/*
Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
*/
let mypromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("hello world");
    }, 2000);
    
    
});

mypromise.then((result) => {
    console.log (result);
});