
// Tests for equality and inequality with strings
console.log('Equality test with strings: ', "apple" === "apple");
console.log('Inequality test wuth strings: ', ("apple" as string) != "Orange"  )

//  Tests using the lower case function
console.log('test using lower case: ', "APPLE".toLowerCase() == "apple" );


// Numerical tests involving equality and inequality
console.log('Numerical test envolving equality: ', 90 == 90  );
console.log('Numerical test envolving inequality: ', (90 as number) != 60  );


// greater than and less than
console.log('Greater than test: ', 10 > 5);
console.log('less than test: ', 5 < 10);


// greater than or equal to, and less than or equal to
console.log('Greater than equal to test: ', 10 >= 10);
console.log('Less than equal to test: ', 10 <= 10);

// Tests using "and" and "or" operators
console.log('Test using and: ', 20 >= 20 && 10<=10);
console.log('Test using or: ', 20 >= 20 || 10<=10);

// Test whether an item is in a array
let item:string[] = ['Huzaifa', 'Hassan', 'Ashfaq']
console.log('Test is this item in this array: ', item.includes('Hassan'));

// Test whether an item is not in a array
console.log('Test is this item in not in array: ', !item.includes('Sameer'));


