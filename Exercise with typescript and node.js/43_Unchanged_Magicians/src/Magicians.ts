
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.




let magiciansNames: string[] = [
  "Harrypotter",
  "doctor Jhatka",
  "Magician",
  "albus Dumbaldore",
];

function copyArry(arr:string[]){
    return [...arr]
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magiciansNames.length; i++) {
    magicians[i] = "The great " + magicians[i];
  }
}

function show_magicians(magiciansNames: string[]) {
  magiciansNames.forEach((Element) => {
    console.log(Element);
  });
}

const magiciansArryCopy = copyArry(magiciansNames)

make_great(magiciansArryCopy);

console.log('This is original magicians\n')
show_magicians(magiciansNames);
console.log('This is copy magicians\n')
show_magicians(magiciansArryCopy);