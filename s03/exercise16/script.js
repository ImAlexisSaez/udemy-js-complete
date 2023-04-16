"use strict";

/*
Exercise #16

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. 
Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. 
Use the function 'percentageOfWorld' that you created earlier to compute the 4 percentage values
*/

const percentageOfWorld = function (population) {
    return (population / 7900) * 100;
};

const populations = [1441, 49, 81, 127];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld(populations[0]).toFixed(1),
    percentageOfWorld(populations[1]).toFixed(1),
    percentageOfWorld(populations[2]).toFixed(1),
    percentageOfWorld(populations[3]).toFixed(1),
];

console.log(percentages);
