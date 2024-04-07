/*
Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
 and motorcycles using enums, and show one example.
*/
var vehicles_categories;
(function (vehicles_categories) {
    vehicles_categories[vehicles_categories["car"] = 0] = "car";
    vehicles_categories[vehicles_categories["truks"] = 1] = "truks";
    vehicles_categories[vehicles_categories["motorcycles"] = 2] = "motorcycles";
})(vehicles_categories || (vehicles_categories = {}));
console.log(vehicles_categories.truks);
export {};
