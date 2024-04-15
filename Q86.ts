/*
Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present 
in a given string. It should return true if found, otherwise false.
*/

function check_javascript_presence(Str : String): boolean {

    return Str.includes('JavaScript');
}

console.log(check_javascript_presence('JavaScript is love.'));
