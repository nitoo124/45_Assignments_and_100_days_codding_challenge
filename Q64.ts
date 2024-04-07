/*
Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
For example, if provided with "Age: " and 30, it should give back "Age: 30".
*/

function merge_tesxt_nd_num(text:string , number : number) {

    const merge_string : string = `${text} : ${number}`;

    return merge_string;
    
};

const text : string = 'age';
const number : number = 30;
const result : string = merge_tesxt_nd_num(text, number);

// print the result

console.log(result);
