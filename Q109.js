/*
Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
*/
// Get the current date and time
var currentDate = new Date();
// Get the current hour (in 24-hour format)
var currentHour = currentDate.getHours();
// Check if the current time is before 12 PM (noon)
if (currentHour < 12) {
    console.log("Good Morning");
}
else if (currentHour <= 16) {
    console.log('Goode Afternoon');
}
else if (currentHour <= 20) {
    console.log('Good evening');
}
else {
    console.log('Good Night');
}
