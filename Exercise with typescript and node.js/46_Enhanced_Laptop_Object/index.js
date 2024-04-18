"use strict";
// Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "Dell",
    model: "XPs 15",
    year: 2021,
    describe: function () {
        console.log(`This laptop is a ${this.year} and ${this.make} and ${this.model}`);
    }
};
laptop.describe();
