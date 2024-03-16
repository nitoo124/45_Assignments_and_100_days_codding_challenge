/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/
var magician_name = ['Derren Brown', 'P.C. Sorcar', 'P.C. Sorcar', 'Jean-Eugène Robert Houdin'];
function show_magicians(magician_name) {
    magician_name.forEach(function (name) {
        console.log(name);
    });
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        var greatMagician = "Great " + magician;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
// Make a copy of the original array
var originalMagicians = magician_name.slice();
// Call makeGreat() with a copy of the array
var greatMagicians = makeGreat(originalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
