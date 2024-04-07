/*
Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns
 both the quotient and the remainder. Use an object to return both values.
*/

function Divide_and_find_remainder(num1:number, num2 : number ) {

    const quotient : number = num1 / num2;

    const remainder : number = num1 % num2;

    return {quotient, remainder};
    
}

console.log(Divide_and_find_remainder(9, 8));