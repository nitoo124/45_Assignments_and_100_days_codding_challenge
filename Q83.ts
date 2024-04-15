/*
Question 83: Converting to Upper and Lower Case: Create a function that takes a string,
 converts it to uppercase, then to lowercase, and logs both.
*/
function convert_uppercase_lowercase(Str:string): void {

    let uppercase = Str.toUpperCase();
    let lowercase = Str.toLowerCase();

    console.log('Uppercase :', uppercase);
    console.log('Lowercase :', lowercase);


}

convert_uppercase_lowercase('Nitoo kumari');