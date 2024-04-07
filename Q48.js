/*
Question 48: Combining Arrays with Spread Operator:
Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order,
 then log the result.
*/
let price_1 = [1400, 1600, 1100];
let price_2 = [1000, 1200, 1500];
let combined_price = [...price_1, ...price_2].sort((a, b) => a - b);
console.log(combined_price);
export {};
