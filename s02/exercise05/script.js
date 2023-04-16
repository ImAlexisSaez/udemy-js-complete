/*
Exercise #05
*/

const myCountry = "Spain";
const myContinent = "Europe";
const isIsland = false;
const language = "spanish";
let myCountryPopulation = 47420000;

/*
1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
*/

const description = `${myCountry} is in ${myContinent}, and its ${myCountryPopulation} million people speak ${language}`;
console.log(description);
