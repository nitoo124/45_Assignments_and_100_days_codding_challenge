/*
Question 146: Show an example of a callback function used to filter an array of numbers.

*/


function filterArray(array, callback) {
    const filteredArray = [];
    for (const element of array) {
      if (callback(element)) { 
        filteredArray.push(element);
      }
    }
    return filteredArray;
  }
  
  function isEven(number) {
    return number % 2 === 0; 
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const evenNumbers = filterArray(numbers, isEven);
  
  console.log("Even numbers:", evenNumbers); 
  