/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted*/
var current_users = ["Admin", "Naina", "Noor", "Nitoo", "Adeena"];
var new_users = ["Admin", "Noreen", "Farah", "Nitoo", "Sonia"];
new_users.forEach(function (new_user) {
    var new_users_lower = new_user.toLowerCase();
    var user_name_taken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_users_lower; });
    if (user_name_taken) {
        console.log("".concat(new_user, " needs to choose new user name "));
    }
    else {
        console.log("".concat(new_user, " user name is availabe"));
    }
});
