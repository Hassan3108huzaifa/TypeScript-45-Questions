"use strict";
let PersonName = '';
PersonName = prompt('Enter your name here') || '';
let lowercase = PersonName.toLowerCase();
let uppercase = PersonName.toUpperCase();
let titlecase = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (PersonName !== null && PersonName !== '') {
    alert(`your name is ${PersonName} and your name is in:
    lowercase: ${lowercase}
    UPPERCASE: ${uppercase}
    TitleCase: ${titlecase}
    
    `);
}
else
    (alert('please enter valid name'));
