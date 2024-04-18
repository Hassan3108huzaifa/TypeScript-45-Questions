"use strict";
// Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
Object.defineProperty(exports, "__esModule", { value: true });
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I Enjoy ${hobby}`);
    });
}
logHobbies("coding", "driving", "operating");
