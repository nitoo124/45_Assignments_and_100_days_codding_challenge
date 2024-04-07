/*
Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
 model, year, and a method describe() that logs a sentence about the laptop.

*/

let laptop = {
    make : 'hp',
    model : 'xps 13',
    year : '2022',
    describe: function (){
        console.log(`This laptop is a ${this.year} ${this.model} ${this.make}`)

    }
}

laptop.describe();
