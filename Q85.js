/*
Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the
 word "code" within any given string and returns its position.
*/
function find_code_position(inputstring) {
    return inputstring.indexOf('code');
}
var inputstring = 'my code is _____';
var position = find_code_position(inputstring);
console.log(position);
