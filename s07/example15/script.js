"use strict";

const switchPlayer = function () {
    // Display current score 0 for active player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Reset the current score
    currentScore = 0;

    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Change CSS for active player
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
};

const initGame = function () {
    // Reset scores
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    // Remove winner class
    player0Element.classList.remove("player--winner");
    player1Element.classList.remove("player--winner");

    // Remove active class
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");

    // Hide dice
    diceElement.classList.add("hidden");

    // Reset state variables
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
};

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
let scores, currentScore, activePlayer, playing;
initGame();

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
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
            switchPlayer();
        }
    }
});

// Hold button functionality
btnHold.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            // Finish the game
            playing = false;

            // Hide the dice
            diceElement.classList.add("hidden");

            // Change styles for the winner
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// New game button functionality
btnNew.addEventListener("click", initGame);
