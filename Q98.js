/*
Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/
function day_unit_new_year() {
    var today = new Date();
    var newyear = new Date(today.getFullYear() + 1, 0, 1);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var defference = newyear.getTime() - today.getTime();
    var days = Math.ceil(defference / millisecondsPerDay);
    console.log("There are " + days + " days left until New Year.");
}
(day_unit_new_year());
