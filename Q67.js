/*
Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters:
a number and a string that represents a number (e.g., "5"). Return their sum as a number.
*/
function Add_num_and_string(num1, num2) {
    //Turns the string into a number and combines it with the first number.
    return num1 + Number(num2);
}
;
//print the function
console.log(Add_num_and_string(8, '90'));
export {};
