/*
Question 56: Keep Only Strings: Given a mix of different types of items, make a new list
that has only the words.
*/
// misxed array
let mixed_arr = ["Nitoo", 8, false, 'Pizza', 6, true, "banana"];
//new array with string
let string_only = mixed_arr.filter(items => typeof items === 'string');
//print the new arry
console.log(string_only);
export {};
