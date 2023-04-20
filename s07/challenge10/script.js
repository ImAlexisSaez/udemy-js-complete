"use strict";

/* Coding challenge #10
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input fields

4. Also restore the original background color (#222) and number width (15rem)
*/

let secretNumber = Math.ceil(Math.random() * 20); // 1 <= secretNumber <= 20
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "No number!";
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "Correct number!";

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector(".message").textContent = "Too high...";
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector(".message").textContent = "Too low...";
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.ceil(Math.random() * 20);
    score = 20;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
