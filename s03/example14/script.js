"use strict";

const jonasArray = [
    "Jonas",
    "Smith",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}:`);
    for (let repetition = 1; repetition < 6; repetition++) {
        console.log(`--- Repetition ${repetition}!`);
    }
}
