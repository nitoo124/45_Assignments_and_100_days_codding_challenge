/*
Question 77: Default Parameters: Write a function that greets a user. 
It should take the user's name as a parameter and say hello. If no name is given, 
it should greet an anonymous user.
*/

function Greet_user(name:string = 'anonymous') :void{

    console.log(`Hello dear ${name}`);
}

//Greeting with the provided name

Greet_user('Nitoo');

// Greeting with default parametre

Greet_user();