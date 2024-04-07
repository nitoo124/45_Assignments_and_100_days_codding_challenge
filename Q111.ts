/*
Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
*/

function categorizeAge(age: number): string {
    if (age < 13) {
        return "child";
    } else if (age >= 13 && age < 20) {
        return "teenager";
    } else {
        return "adult";
    }
}

const personAge: number = 25;
const ageGroup: string = categorizeAge(personAge);
console.log(`The person is in the ${ageGroup} age group.`);
