// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.

function calculatesArea(width:number, height:number): number{
    return width *  height
}

let calculatesAreaArrow = (width:number, height:number): number => width * height;

console.log(calculatesAreaArrow(7,9));
