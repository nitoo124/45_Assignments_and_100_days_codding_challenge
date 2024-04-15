/*
Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
*/
var i = 10;
while (i >= 1) {
    console.log(i);
    if (i === 5) {
        break; // Break the loop when i reaches 5
    }
    i--;
}
