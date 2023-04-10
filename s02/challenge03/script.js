/*
Coding challenge #03

There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!
*/

/*
1. Calculate the average score for each team, using the test data below

Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Data 1
// const dolphinsMatch1 = 96;
// const dolphinsMatch2 = 108;
// const dolphinsMatch3 = 89;
// const koalasMatch1 = 88;
// const koalasMatch2 = 91;
// const koalasMatch3 = 110;

// Data bonus 1
// const dolphinsMatch1 = 97;
// const dolphinsMatch2 = 112;
// const dolphinsMatch3 = 101;
// const koalasMatch1 = 109;
// const koalasMatch2 = 95;
// const koalasMatch3 = 123;

// Data bonus 2
const dolphinsMatch1 = 97;
const dolphinsMatch2 = 112;
const dolphinsMatch3 = 101;
const koalasMatch1 = 109;
const koalasMatch2 = 95;
const koalasMatch3 = 106;

const dolphinsAverage = (dolphinsMatch1 + dolphinsMatch2 + dolphinsMatch3) / 3;
const koalasAverage = (koalasMatch1 + koalasMatch2 + koalasMatch3) / 3;

/*
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
*/

if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins won the competition!");
} else if (dolphinsAverage < koalasAverage) {
    console.log("Koalas won the competition!");
} else {
    console.log("It's a tie between Dolphins and Koalas!");
}

/*
Bonus 1: 
Include a requirement for a minimum score of 100. 
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
*/

/*
Bonus 2: 
Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy
*/

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins won the competition!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log("Koalas won the competition!");
} else if (
    dolphinsAverage === koalasAverage &&
    dolphinsAverage >= 100 &&
    koalasAverage >= 100
) {
    console.log("It's a tie between Dolphins and Koalas!");
} else {
    console.log("No one wins the trophy!");
}
