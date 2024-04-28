/*
Question 145: Create a function that accepts a callback and invokes it with some arguments.
*/

function Callback(callback, arg1, arg2) {
    callback(arg1, arg2);
  }
  
  function myCallback(value1, value2) {
    console.log("Callback invoked with values:", value1, value2);
  }
  
  Callback(myCallback, "Hello", "World");
  