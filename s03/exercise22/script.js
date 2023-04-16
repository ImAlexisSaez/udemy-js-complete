"use strict";

/*
Exercise #22

1. Let's bring back the 'populations' array from a previous assignment

2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. 
Use the function 'percentageOfWorld1' that you created earlier

3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
*/

const percentageOfWorld = function (population) {
    return (population / 7900) * 100;
};

const populations = [1441, 49, 81, 127];

const percentages = [];
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld(populations[i]));
}
console.log(percentages);
