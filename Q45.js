"use strict";
/*
Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs,
 such as a color or an optional feature. Print the Object that’s returned to make sure all the information
 was stored correctly.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional properties
let mycar = make_car("Toyota", 'camery', ['color', 'blue'], ['year', '2024']);
console.log(mycar);
