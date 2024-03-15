/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/

let magician_name :string[] = ['Derren Brown', 'P.C. Sorcar', 'P.C. Sorcar', 'Jean-Eugène Robert Houdin'];

function show_magicians(magician_name:string[]): void {

    magician_name.forEach(name=> {
        console.log(name);
    });

//// Function to modify magician names by adding "the Great"

    function make_great(magician_name:string[]) {
        
 magician_name.forEach(makegrate =>{
    console.log(`the greate ${makegrate}`);
 })
    }

    make_great(magician_name);


    
}
show_magicians(magician_name);