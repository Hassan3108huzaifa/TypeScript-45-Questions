"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ['Karachi', 'Sindh', 'Punjab', 'Balochistan', 'Kashmeer'];
// Print your array in its original order.
console.log('1 ' + places + "\n");
// Print your array in alphabetical order without modifying the actual list.
console.log('2 ' + [...places].sort() + "\n");
// Show that your array is still in its original order by printing it.
console.log('3 ' + places + "\n");
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('4 ' + [...places].sort().reverse() + "\n");
// Show that your array is still in its original order by printing it again.
console.log('5 ' + places + "\n");
// Reverse the order of your list. Print the array to show that its order has changed.
console.log('6 ' + places.reverse() + "\n");
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('7 ' + places.reverse() + "\n");
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('8 ' + [places].sort() + "\n");
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('9 ' + [places].sort() + "\n");
