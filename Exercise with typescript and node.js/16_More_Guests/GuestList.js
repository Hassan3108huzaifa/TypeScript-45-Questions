"use strict";
let GuestList = ['Huzaifa', 'Hassan', 'Rohan'];
// for(let i=0; i<GuestList.length; i++){
//     console.log('Dear Mr. ' + GuestList[i] + ',\nI want to invite you to our home\n\tKindly Please accepet my invitation\nThank You\n\n'    )
// }
let absentGuess = 'Huzaifa';
let newGuess = 'Sameer';
GuestList[0] = newGuess;
for (let i = 0; i < GuestList.length; i++) {
    console.log('Dear Mr. ' + GuestList[i] + ',\nI want to invite you to our home\n\tKindly Please accepet my invitation\nThank You\n\n');
}
console.log(`Mr. ${absentGuess} are not comming to my home thats why I have to invite new Guest\n\n`);
console.log('we will make food to much so thats why we inviting new more 3 guests');
GuestList.unshift('Rafi');
GuestList.splice(2, 0, 'Hamza');
GuestList.push('Ashfaq');
for (let i = 0; i < GuestList.length; i++) {
    console.log('Dear Mr. ' + GuestList[i] + ',\nI want to invite you to our home\n\tKindly Please accepet my invitation\nThank You\n\n');
}
