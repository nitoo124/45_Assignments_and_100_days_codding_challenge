/*
Question 127: Convert a traditional function expression to an arrow function.
*/


//Traditinal function
const traditionalFunction = function(a: number, b: number): number {
    return a + b;
  };


  //Arrow function
  const arrow_func = (a:number, b:number)=>a+b;


//print traditional Function
  console.log(traditionalFunction(6,8));

//print Arrow Function
  console.log(arrow_func(6,8));