"use strict";

for (let rep = 1; rep < 11; rep++) {
    console.log(`Lifting weights: repetition ${rep}!`);
}

let rep = 1;
while (rep < 11) {
    console.log(`Lifting weights: repetition ${rep}!`);
    rep++;
}

let dice = Math.ceil(Math.random() * 6);
while (dice < 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.ceil(Math.random() * 6);
}
console.log(`Great! You rolled a ${dice}`);
