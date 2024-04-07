/*
Question 82: Find the Length of a String: Write a function that takes a string as an argument and 
returns the number of characters in the string.
*/

function String_lenght(Str:string) {

    return Str.length;
    
};

let Str = 'Hello world';
console.log('Lenght of the string', String_lenght(Str));