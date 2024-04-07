/*
Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
Try to reassign a const-declared variable and catch the error.
*/

let num1 : number = 5;

// Reassigning 
num1 =  65 // works fine because let allows Reassigning

console.log(num1);// shows 65

// Trying to reassign a `const`-declared variable

const num2 : number = 8;
try{
    num2 = 55; //it will throw an error

}catch(error){

    console.log("Error occurred:", error.message); // Output: Error occurred: Assignment to constant variable.

}