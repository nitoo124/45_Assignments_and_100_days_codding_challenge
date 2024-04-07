/*
Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a
special type alias, including properties unique to each shape.
*/
let rectangle = {
    kind: 'rectangle',
    widht: 20,
    height: 30
};
let circle = {
    kind: 'circle',
    radius: 10,
};
console.log(rectangle);
console.log(circle);
export {};
