/*
Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
*/

function rooldice(): number{
    return Math.floor(Math.random() * 6) + 1;


}

let diceroll:number = rooldice();
console.log(diceroll)