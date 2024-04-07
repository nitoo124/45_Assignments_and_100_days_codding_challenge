/*
Question 83: Converting to Upper and Lower Case: Create a function that takes a string,
 converts it to uppercase, then to lowercase, and logs both.
*/

function convert_case(Str:string) {

    let uppercaseStr = Str.toUpperCase();
    let lowercaseStr = Str.toLowerCase();

    console.log(`uppercase : ${uppercaseStr}`);
    console.log(`Lowercase : ${lowercaseStr}`);
};

const inputstr = 'Hello world';

convert_case(inputstr);