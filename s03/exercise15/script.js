"use strict";

/*
Exercise #15

1. Create a function called 'describePopulation'. 
Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier.

3. Call 'describePopulation' with data for 3 countries of your choice
*/

const percentageOfWorld = function (population) {
    return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld(
        population
    ).toFixed(1)}% of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("Spain", 49));
console.log(describePopulation("Germany", 81));
