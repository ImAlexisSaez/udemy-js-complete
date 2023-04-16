/*
Coding challenge #02

Use the BMI example from Challenge #01, and the code you already wrote, and improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/

// Data 1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

// Data 2
// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log(
        `Mark's BMI (${bmiMark.toFixed(
            1
        )}) is higher than John's (${bmiJohn.toFixed(1)})!`
    );
} else {
    console.log(
        `John's BMI (${bmiJohn.toFixed(
            1
        )}) is higher than Marks's (${bmiMark.toFixed(1)})!`
    );
}
