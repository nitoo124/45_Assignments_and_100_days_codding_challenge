/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a
rectangle and refactor it into an arrow function.
*/
function calculate_area(width, height) {
    return width * height;
}
let calculate_area_Arrow = (width, height) => width * height;
//calling function
console.log(calculate_area_Arrow(5, 6));
export {};
