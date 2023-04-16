/*
Exercise #06
*/

const myCountry = "Spain";
const myContinent = "Europe";
const isIsland = false;
const language = "spanish";
let myCountryPopulation = 47420000;
// let myCountryPopulation = 13000000;
// let myCountryPopulation = 130000000;

/*
1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population) 
*/

if (myCountryPopulation >= 33000000) {
    console.log(`${myCountry}'s population is above average.`);
} else {
    console.log(`${myCountry}'s population is below average.`);
}
