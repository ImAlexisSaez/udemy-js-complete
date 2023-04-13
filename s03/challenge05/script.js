"use strict";

/*
Challenge #05

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
*/

/*
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
*/

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log("No team wins!");
    }
}

// Data 1
// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;
// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// Data 2
const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;
const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(avgDolphins, avgKoalas);
