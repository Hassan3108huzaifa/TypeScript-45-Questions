"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magiciansNames = ['Harrypotter', 'doctor Jhatka', 'Magician', 'albus Dumbaldore'];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magiciansNames);
