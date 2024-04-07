/*
Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
*/

function assignGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

const studentScore: number = 60;
const studentGrade: string = assignGrade(studentScore);
console.log(`The student's score of ${studentScore} corresponds to grade ${studentGrade}.`);
