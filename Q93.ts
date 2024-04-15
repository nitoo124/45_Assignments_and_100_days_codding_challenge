/*
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
*/
function replace_banana_with_mango(fruits:string[]) :void {

    //find the index of banana
    let index = fruits.indexOf('banana');

    // Replaces "Banana" with "Mango" if found

    if(index !== -1) fruits[index] = 'mango'
    
}

let fruits :string[]= ['Kiwi', 'banana', 'cherry'];
console.log('array with banana :' ,fruits);


replace_banana_with_mango(fruits);
console.log('array replace banana with mango : ', fruits);


