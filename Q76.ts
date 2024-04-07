/*
Question 76: Function Parameters and Return Values: Create a function that takes two numbers as 
parameters, adds them together, and returns the result. Show how you can call this function and log 
the result.
*/

function Add_number(num1:number, num2 : number) {
    return num1 + num2;
    
};

let result : number = Add_number(8, 6);
console.log(result);