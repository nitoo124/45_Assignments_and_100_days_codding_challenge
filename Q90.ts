/*
Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
*/

function checkIsNAN(val:any): boolean {
 return isNaN(val);
    
}
console.log(checkIsNAN('hello Nitoo'));//output will be true
console.log(checkIsNAN(456)); //output will be false
console.log(checkIsNAN(NaN)); //output will be true