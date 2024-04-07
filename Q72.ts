/*Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} 
that uses both let and const. Show how variables declared inside the block are not accessible outside of 
it.
*/
{
    let a : number = 8;
    const b : number =65;

    console.log('works fine Indide the block');


    console.log(a);// works fine here!
    console.log(b); // works fine here too!

};

try{

    console.log(a);// it will not work

}catch(error){

    console.log("let is not accessible outside the block.");
}

try{

    console.log(b);// it will not work

}catch(error){

    console.log("const is not accessible outside the block.");
    
}