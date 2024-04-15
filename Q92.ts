/*
Question 92: Write a function to remove the last element from an array and return the removed element.
*/

function Last_element_remove<T>(arry:T[]): T | undefined {

    return arry.pop();
    
    
}

const fruits : string[] = ['Banana', 'Apple', "Kiwi", ];

console.log(Last_element_remove(fruits))

console.log(fruits);