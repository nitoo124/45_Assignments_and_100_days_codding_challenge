/*
Question 99: Generate a date object representing your next birthday and log it to the console.
*/
/*const currentyear : number = new Date().getFullYear();

const  birthday_month : number = 9;
const  birthday_year : number = 4;

// Creating a date object for your next birthday

let next_birth : Date = new Date(currentyear, birthday_month, birthday_year);

// Check if the birthday has already passed this year
if (next_birth < new Date()){
     next_birth.setFullYear(currentyear + 1)

}

console.log(next_birth);*/
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
var nextBirthday = getNextBirthday(12, 25); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows th 
