"use strict";

/*
Exercise #14

1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const china3 = percentageOfWorld3(1441);
const spain3 = percentageOfWorld3(49);
const germany3 = percentageOfWorld3(81);

console.log(china3, spain3, germany3);
