/*
Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
*/
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip number 5
    }
    console.log(i);
}
