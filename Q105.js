/*
Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
*/
function rooldice() {
    return Math.floor(Math.random() * 6) + 1;
}
var diceroll = rooldice();
console.log(diceroll);
