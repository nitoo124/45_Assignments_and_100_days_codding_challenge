/*
Question 146: Show an example of a callback function used to filter an array of numbers.

*/
function filterArray(array, callback) {
    var filteredArray = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
function isEven(number) {
    return number % 2 === 0;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numbers, isEven);
console.log("Even numbers:", evenNumbers);
