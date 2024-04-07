/*
Question 73: Assigning and Updating Variables: Create a function where you declare a variable using
let and assign an initial value. Then, update its value within the same function and log both the
 initial and updated values.
*/
function Update_variable() {
    let my_variable = 'Neet'; //incial value
    console.log('Incial value : ' + my_variable);
    //Update value
    my_variable = 'Nitoo';
    console.log('Updated value : ' + my_variable);
}
Update_variable();
export {};
