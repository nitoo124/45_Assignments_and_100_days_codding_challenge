/*
Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values.
 It should only say true if both are true, using the && operator. 
 For instance, checkBothTrue(true, false) should be false.
*/

function check_both_true(value1:boolean, value2 : boolean) : boolean{

    return value1 && value2;
    
};
console.log(check_both_true(true, false)); //false
console.log(check_both_true(true, true)); //true

