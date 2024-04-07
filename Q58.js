/*Question 58: Average Score Calculator: Write a simple program that can take lots of scores
and find their average.
*/
function Average_score(...scores) {
    //calculation
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
//calling the function
console.log(Average_score(85, 98, 63, 96));
export {};
