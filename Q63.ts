/*
Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a 
special type alias, including properties unique to each shape.
*/

// Define a type alias for the shapes
type shape  = {
    kind: 'circle' | 'rectangle';
    radius?: number;
    widht?: number;
    height?: number;
};

 let rectangle : shape  ={
    kind : 'rectangle',
    widht : 20,
    height : 30
 } ;

 let circle : shape = {
    kind : 'circle',
    radius : 10,
 };

 console.log(rectangle);
 console.log(circle);


