/*
Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
 each with properties make, model, and year, use array destructuring to assign the first and second
  laptops to variables. Then, log these variables.

*/
let laptops = [
    { make: 'dell', model: 'xps 13', year: '2021' },
    { make: 'hp', model: 'macbook pro', year: '2022' },
    { make: 'Iphone', model: 'spectre x360', year: '2023' },
];
// destructuring
let [laptop1, laptop2, laptop3] = laptops;
console.log('laptop1', laptop1);
console.log('laptop2', laptop2);
console.log('laptop3', laptop3);
export {};
