/*
Question 78: Function Expressions vs. Function Declarations: Compare function expressions and
declarations by creating one of each that performs the same task, such as squaring a number.
*/
//Function declaration
function Square_number(x) {
    return x * x;
}
//calling the function
var result1 = Square_number(3);
console.log('Result using function decleration', result1);
// Function Expression
var Square_number_expression = function (x) {
    return x * x;
};
//calling the function
var result2 = Square_number_expression(2);
console.log('Result using function expresssion', result2);
