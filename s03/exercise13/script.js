"use strict";

/*
Exercise #13

1. The world population is 7900 million people. 
Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. 
For example, China has 1441 million people, so it's about 18.2% of the world population

2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console 

4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const china1 = percentageOfWorld1(1441);
const spain1 = percentageOfWorld1(49);
const germany1 = percentageOfWorld1(81);

console.log(china1, spain1, germany1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const china2 = percentageOfWorld2(1441);
const spain2 = percentageOfWorld2(49);
const germany2 = percentageOfWorld2(81);

console.log(china2, spain2, germany2);
