/*
Question 80: Updating Object Properties: Add a property named color to the existing car object,
 and then update the year property to 2021. Show how to perform these operations.
*/
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
};
// Adding the color property to the car object
car.color = "Black";
// Updating the year property of the car object to 2021
car.year = 2021;
console.log('Updated car object:', car);
