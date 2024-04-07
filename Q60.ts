/*
Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell
 you the user's name and age.
*/

let user_profile = (function () {

    let name : string = 'Nitoo';
    let age : number = 20;

    return {
        display_profile:function() {
            console.log(`Name : ${name}, Age : ${age}`)
            
        }
    };  
})();

user_profile.display_profile();