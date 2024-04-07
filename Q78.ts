/*
Question 78: Function Expressions vs. Function Declarations: Compare function expressions and 
declarations by creating one of each that performs the same task, such as squaring a number.
*/

//Function declaration
function Square_number(x:number) {
    return x * x;
}
//calling the function
let result1 :number = Square_number(3);
console.log('Result using function decleration', result1)

// Function Expression

let Square_number_expression = function (x:number) {

    return x * x   
};
//calling the function

let result2 : number = Square_number_expression(2);
console.log('Result using function expresssion', result2);