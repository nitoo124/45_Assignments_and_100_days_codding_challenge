/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


let favoritefruits :string[] = ["mango", "apple", "banana"];

//check apple is in array
if (favoritefruits.includes("mango")) {
    
    console.log("You really like mangoes")
}
////check kiwi is in array

if (favoritefruits.includes("kiwi")) {
    
    console.log("You really like kiwis")
}
//check apple is in array
if (favoritefruits.includes("apple")) {
    
    console.log("You really like apples")
}
//check banana is in array
if (favoritefruits.includes("banana")) {
    
    console.log("You really like bananas")
}

//check orange is in array
if (favoritefruits.includes("orange")) {

    console.log(" You really like orange")
    
}