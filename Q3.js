/*Q3: Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var person_Name = "Neetu kumaRi";
// In lowercase 
console.log(person_Name.toLowerCase());
// In Uppercase 
console.log(person_Name.toUpperCase());
// In titlecase
var first_char = person_Name.charAt(0);
var titlecase = person_Name.slice(1, 12);
console.log(first_char.toUpperCase() + titlecase.toLowerCase());
