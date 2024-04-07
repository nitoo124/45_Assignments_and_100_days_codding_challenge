/*
Question 59: Add a Special Number: Make a program that creates custom adders.
These adders can add a specific number to any other number you give them later.

*/
function create_adders(value_to_add) {
    return function (number) {
        return number + value_to_add;
    };
}
;
let ten_num = create_adders(10);
console.log(ten_num(20));
export {};
