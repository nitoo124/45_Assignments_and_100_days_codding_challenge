/*
Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
*/
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age >= 13 && age < 20) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
var personAge = 25;
var ageGroup = categorizeAge(personAge);
console.log("The person is in the ".concat(ageGroup, " age group."));
