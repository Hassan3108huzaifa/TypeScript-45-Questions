// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.




let magiciansNames:string[] = ['Harrypotter','doctor Jhatka','Magician','albus Dumbaldore']

function make_great(magicians:string[]){

       for (let i = 0; i < magiciansNames.length; i++) {
        
        magiciansNames[i] = 'The great ' + magicians[i]
        
       }

}



function show_magicians(magiciansNames:string[]){
    magiciansNames.forEach(Element => {
        console.log(Element)
        
    });
}
make_great(magiciansNames)
show_magicians(magiciansNames)