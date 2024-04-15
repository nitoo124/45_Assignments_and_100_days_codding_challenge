/*
Question 103: Write a function that returns a random boolean value, true or false.
*/
function getrandomboolean() {
    return Math.random() < 0.5;
}
var random_boolean = getrandomboolean();
console.log(random_boolean);
