"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
function calculatesArea(width, height) {
    return width * height;
}
let calculatesAreaArrow = (width, height) => width * height;
console.log(calculatesAreaArrow(7, 9));
