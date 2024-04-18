"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let laptopPrice1 = [10000, 15000, 18000];
let laptopPrice2 = [20000, 25000, 28000];
let combinedPrices = [...laptopPrice1, ...laptopPrice2].sort((a, b) => a - b);
console.log(combinedPrices);
