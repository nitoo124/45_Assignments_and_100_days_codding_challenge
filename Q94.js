/*
Question 94: Use the .map() method to create a new array that contains the length of each word from an
array of words.
*/
var word = ['Apple', 'Banana', 'Cherry', 'mango'];
var word_lengths = word.map(function (word) { return word.length; });
console.log(word_lengths);
