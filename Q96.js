/*
Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/
function calculate_sum(numbers) {
    return numbers.reduce(function (accumulator, currentvalue) { return accumulator + currentvalue; });
}
var numbers = [5, 6, 9, 20, 8, 65];
console.log(calculate_sum(numbers));
