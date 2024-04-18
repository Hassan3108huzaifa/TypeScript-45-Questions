"use strict";
let PersonName = "";
PersonName = prompt("Please Enter your name ") || '';
if (PersonName !== null && PersonName !== '') {
    alert(`Hello ${PersonName} congratulations! your name has been verified :)`);
}
else
    (alert('Please enter your vlid name !'));
