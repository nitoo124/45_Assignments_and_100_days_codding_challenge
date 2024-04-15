/*
Question 103: Write a function that returns a random boolean value, true or false.
*/

function getrandomboolean(): boolean {

    return Math.random()< 0.5;
    
}

let random_boolean : boolean = getrandomboolean();

console.log(random_boolean);