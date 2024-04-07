/*
Question 83: Converting to Upper and Lower Case: Create a function that takes a string,
 converts it to uppercase, then to lowercase, and logs both.
*/
function convert_case(Str) {
    var uppercaseStr = Str.toUpperCase();
    var lowercaseStr = Str.toLowerCase();
    console.log("uppercase : ".concat(uppercaseStr));
    console.log("Lowercase : ".concat(lowercaseStr));
}
;
var inputstr = 'Hello world';
convert_case(inputstr);
