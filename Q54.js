/*
Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of
each section based on what you need at that moment, like adjusting labels based on user choices.
*/
//list with customizable section names
function Object_with_dynamic_key(key, value) {
    let dynamic_object = {};
    //list with a changeable name
    dynamic_object[key] = value;
    return dynamic_object;
}
let userpresence = Object_with_dynamic_key('theme', 'dark');
console.log(userpresence);
export {};
