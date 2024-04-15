/*
Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
*/
var str = "Hello World";
var vowels = ['a', 'e', 'i', 'o', 'u'];
for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase(); // Convert character to lowercase for comparison
    if (vowels.includes(char)) {
        console.log("First vowel found:", char);
        break; // Stop the loop when the first vowel is found
    }
}
