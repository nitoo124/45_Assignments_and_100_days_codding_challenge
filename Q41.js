/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
*/
var magician_name = ['Derren Brown', 'P.C. Sorcar', 'P.C. Sorcar', 'Jean-Eugène Robert Houdin'];
function show_magicians(magician_name) {
    magician_name.forEach(function (name) {
        console.log(name);
    });
}
show_magicians(magician_name);
