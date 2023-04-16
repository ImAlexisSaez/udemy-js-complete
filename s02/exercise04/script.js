/*
Exercise #04
*/

const myCountry = "Spain";
const myContinent = "Europe";
const isIsland = false;
const language = "spanish";
let myCountryPopulation = 47420000;

/*
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
*/
console.log(myCountryPopulation / 2);

/*
2. Increase the population of your country by 1 and log the result to the console
*/
myCountryPopulation++;
console.log(myCountryPopulation);

/*
3. Finland has a population of 6 million. Does your country have more people than Finland?
*/
let finlandPopulation = 6000000;
console.log(myCountryPopulation > finlandPopulation);

/*
4. The average population of a country is 33 million people. Does your country have less people than the average country?
*/
let averagePopulation = 33000000;
console.log(myCountryPopulation < averagePopulation);

/*
5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/
const description =
    myCountry +
    " is in " +
    myContinent +
    ", and its " +
    myCountryPopulation +
    " million people speak " +
    language;
console.log(description);
