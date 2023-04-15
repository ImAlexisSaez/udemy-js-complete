"use strict";

const jonasArray = [
    "Jonas",
    "Smith",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true,
];

const jonasArrayTypes = []; // empty array
for (let i = 0; i < jonasArray.length; i++) {
    // console.log(jonasArray[i], typeof jonasArray[i]);

    //jonasArrayTypes[i] = typeof jonasArray[i];

    jonasArrayTypes.push(typeof jonasArray[i]);
}
console.log(jonasArrayTypes);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
    ages.push(2037 - birthYears[i]);
}

console.log(ages);

// continue
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// break
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
