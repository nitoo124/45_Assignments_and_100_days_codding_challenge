/*
Question 106: Determine if a given year is a leap year using comparison operators.
*/
function isleapyear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var year = 2024;
if (isleapyear(year)) {
    console.log("".concat(year, " is a leap year."));
}
else {
    console.log("".concat(year, " is not a leap year."));
}
