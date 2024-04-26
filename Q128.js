/*
*/
const getProduct = (...numbers) => {
    // Using the reduce method to multiply all numbers together
    return numbers.reduce((total, number) => total * number, 1);
};
console.log(getProduct(2, 2, 2));
export {};
