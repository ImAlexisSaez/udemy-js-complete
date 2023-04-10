const myCountry = "Spain";
const myContinent = "Europe";
const isIsland = false;
const language = "spanish";
// const language = "english";
let myCountryPopulation = 47420000;

/*
1. Comment out the previous code so the prompt doesn't get in the way.

2. Let's say Sarah is looking for a new country to live in. 
She wants to live in a country that speaks english, has less than 50 million people and is not an island.

3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. 
Take your time with this, and check part of the solution if necessary.
*/

const languageCondition = language === "english";
const populationCondition = myCountryPopulation < 50000000;
const islandCondition = isIsland === false;

/*
4. If yours is the right country, log a string like this: 
    'You should live in Portugal :)'. 
If not, log 
    'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. 
So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
*/

if (languageCondition && populationCondition && islandCondition) {
    console.log(`You should live in ${myCountry}!`);
} else {
    console.log(`${myCountry} does not meet your criteria!`);
}
