"use strict";

// Selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
    // 1. Generating a random dice roll
    const dice = Math.ceil(Math.random() * 6);

    // 2. Display the dice
    diceElement.src = `images/dice-${dice}.png`;
    diceElement.classList.remove("hidden");

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    } else {
        // Display current score 0 for active player
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        // Reset the current score
        currentScore = 0;

        // Switch to next player
        activePlayer = activePlayer === 0 ? 1 : 0;

        // Change CSS for active player
        player0Element.classList.toggle("player--active");
        player1Element.classList.toggle("player--active");
    }
});
