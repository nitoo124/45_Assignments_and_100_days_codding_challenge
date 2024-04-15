/*
Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
*/

function numbers_greater_than_10(arry : number[]) : number[]{

    return arry.filter( num => num > 10 )
    
}

let arry :number[] = [10, 6, 90, 7, 15, 30];

console.log(numbers_greater_than_10(arry));