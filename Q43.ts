
/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/

let magician_name :string[] = ['Derren Brown', 'P.C. Sorcar', 'P.C. Sorcar', 'Jean-Eugène Robert Houdin'];

function show_magicians(magician_name:string[]): void {

    magician_name.forEach(name=> {
        console.log(name);
    });}
    function makeGreat(magicians: string[]): string[] {
        const greatMagicians: string[] = [];
        for (const magician of magicians) {
            const greatMagician: string = "Great " + magician;
            greatMagicians.push(greatMagician);
        }
        return greatMagicians;
    }

// Make a copy of the original array

    const originalMagicians: string[] = magician_name.slice();

// Call makeGreat() with a copy of the array

    const greatMagicians: string[] = makeGreat(originalMagicians);

    console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

    

