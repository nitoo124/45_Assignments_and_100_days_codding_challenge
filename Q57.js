/*
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
*/
// list of Grades
let grades = [86, 54, 70, 85, 36];
// Calculate the grades 
let sum = grades.reduce((total, grade) => total + grade, 0);
let average_Grade = sum / grades.length;
//print the calculation
console.log(average_Grade);
export {};
