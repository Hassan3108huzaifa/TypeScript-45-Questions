"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ['Hassan', 'Ashfaq', 'Huzaifa', 'Hamza', 'Rafi'];
let new_users = ['Sameer', 'Hassan', 'Rohan', 'Muavia', 'Ashfaq'];
new_users.forEach(newUserNames => {
    let lowercase = newUserNames.toLowerCase(); // variable name should be lowercase, and also it should be declared inside the loop
    // Check if the lowercase version of the new username exists in the current users list
    if (current_users.some(c_user => c_user.toLowerCase() === lowercase)) {
        console.log(`The username ${newUserNames} is not available. Please try a different username.`);
    }
    else {
        console.log(`The username ${newUserNames} is available.`);
    }
});
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
