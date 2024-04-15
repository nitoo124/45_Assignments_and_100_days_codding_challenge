/*
Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the
 word "code" within any given string and returns its position.
*/

function find_code_position(inputstring:string): number {

    return inputstring.indexOf('code');
    
}

let inputstring : string = 'my code is _____';
const position : number = find_code_position(inputstring);

console.log(position);