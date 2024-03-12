/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var users = ['Admin', 'Liza', 'Nitoo', 'Neha', 'Mehwish', 'Naina'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === 'Admin') {
        console.log("hello Admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(users, ", thank you for logging in again"));
    }
}
