"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 15;
