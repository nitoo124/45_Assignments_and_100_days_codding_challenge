/*
Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number
 (like "123") and converts it into an actual number type.
*/

function convert_string_to_number(Str:string) : number{
    return parseInt(Str);
    
}

const Str : string = '345';
const convert_num : number = convert_string_to_number(Str);
console.log(convert_num);
