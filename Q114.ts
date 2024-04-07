/*
Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
*/

// Define a Map of student IDs and names
let studentMap: Map<number, string> = new Map();
studentMap.set(1, "Nitoo");
studentMap.set(2, "Anika");
studentMap.set(3, "Neet");

// Iterate over the Map and log each pair to the console
studentMap.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
