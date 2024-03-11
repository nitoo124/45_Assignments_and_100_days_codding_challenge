/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


let myname : string = 'Nitoo kumari';
let my_num : number = 5;

//Test 1
//string
console.log("Is myname == 'Nitoo kumari'? I predict True.");
console.log(myname == 'Nitoo kumari');

//Test 2
console.log("Is myname == 'nitoo kumari'? I predict false.");
console.log(myname != 'nitoo kumari');

//Test 3
//number
console.log("Is my_num >= 5? I predict True.");
console.log(my_num >= 5);

//Test 4
console.log("Is my_num > 6 ? I predict false.");
console.log(my_num > 6);


//Test 5
//tolowercase
console.log("Is myname.toLowerCase() == 'nitoo kumari'? I predict true.");
console.log(myname.toLowerCase() == 'nitoo kumari');

//Test 6
console.log("Is myname.toLowerCase() == 'Nitoo kumari'? I predict false.");
console.log(myname.toLowerCase() == 'Nitoo kumari');



//Test 7
//logoical operators
console.log("Is my_num >2 && my_num <10 I predict true.");
console.log(my_num > 2 && my_num< 10);

//Test 8
let fruits : string[] = ['Orange', 'Banana', 'Apple'];
console.log("Is Apple in fruits ''? I predict true.");
console.log(fruits.includes ('Apple'));

//Test 9
console.log("Is Kiwi in fruits''? I predict false.");
console.log(fruits.includes ('Kiwi'));

//Test 10
console.log("Is Kiwi not in fruits''? I predict true.");
console.log(!fruits.includes ('Kiwi'));









