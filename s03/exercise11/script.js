"use strict";

/*
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. 
Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. 
Store the returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    const countrydescription = `${country} has ${population} million people and its capital city s ${capitalCity}.`;
    return countrydescription;
}

const spain = describeCountry("Spain", "50", "Madrid");
const france = describeCountry("France", 80, "Paris");
const italy = describeCountry("Italy", "60", "Rome");

console.log(spain);
console.log(france);
console.log(italy);
