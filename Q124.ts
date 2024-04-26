/*
Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
*/


const Myobject = {
    name : 'Myobject',
    Getname: function () {
        return this.name
        
    }
}

console.log(Myobject.Getname());