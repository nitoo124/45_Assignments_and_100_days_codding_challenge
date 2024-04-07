/*
Question 55: Double Numbers in an Array: Make a list of numbers. 
Then, use a trick to make a new list where each number is twice its original value.
*/

// original list
let original_list:number[] =[1, 2, 3, 4, 5];

// Create a new array where each number is twice its original value

let Double_list : number[] = original_list.map(num => num *2);

// print the code
console.log(Double_list);
