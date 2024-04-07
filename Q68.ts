/*
Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns 
their product. Round the result to two decimal places.
*/

function multiply_decimal(num1:number, num2 : number) : number{

    const product :number = num1 * num2;

    return Math.round(product * 100) / 100;

    
};

console.log(multiply_decimal(6.5, 8.9));