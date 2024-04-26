/*
Question 125: Modify a method in an object to use the this keyword to access another property in the 
same object.
*/

const myobject = {
    name : 'Myobject',
    Description : 'This is an object',
    Getdescription : function(){
        return `${this.name}: ${this.Description}`;
    }
}

console.log(myobject.Getdescription());