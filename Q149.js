/*
Question 149: Explain the concept of the event loop in JavaScript with an example.
*/
// Function to be executed after the delay
function greet() {
    console.log("Hello, World!");
}
// Execute the greet function after a delay of 2 seconds (2000 milliseconds)
setTimeout(greet, 2000);
