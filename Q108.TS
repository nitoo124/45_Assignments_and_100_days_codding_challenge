/*
Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

*/

function areStringsIdenticalIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

const string1: string = "Hello";
const string2: string = "hello";

if (areStringsIdenticalIgnoreCase(string1, string2)) {
    console.log("The strings are identical ignoring case.");
} else {
    console.log("The strings are not identical ignoring case.");
}
