/*
Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. 
Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
*/

let a : number = 5;
let b : number = 10;

console.log('Before Swapping');
console.log(a);
console.log(b);

// Swapping values here!

let c = a ;
a = b;
b = c;

console.log('After Swapping');
console.log(a);
console.log(b);

