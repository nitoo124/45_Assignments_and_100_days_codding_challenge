/*
Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns
 both the quotient and the remainder. Use an object to return both values.
*/
function Divide_and_find_remainder(num1, num2) {
    const quotient = num1 / num2;
    const remainder = num1 % num2;
    return { quotient, remainder };
}
console.log(Divide_and_find_remainder(9, 8));
export {};
