"use strict";
// Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
Object.defineProperty(exports, "__esModule", { value: true });
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
