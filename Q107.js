/*
Question 107: Write a condition using logical operators that checks if a number is divisible by both
 2 and 3.
*/
function isDivisibleBy2And3(number) {
    return number % 2 === 0 && number % 3 === 0;
}
var num = 12;
if (isDivisibleBy2And3(num)) {
    console.log("".concat(num, " is divisible by both 2 and 3."));
}
else {
    console.log("".concat(num, " is not divisible by both 2 and 3."));
}
