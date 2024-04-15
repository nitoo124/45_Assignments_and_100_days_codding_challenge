/*
Question 94: Use the .map() method to create a new array that contains the length of each word from an 
array of words.
*/

let word = ['Apple', 'Banana', 'Cherry', 'mango'];

let word_lengths = word.map(word => word.length);

console.log(word_lengths)