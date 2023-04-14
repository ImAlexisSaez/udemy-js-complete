"use strict";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2007, 2020);

console.log(friends[0], friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends[2]);

// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Smith", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(birthYears)); // NaN

console.log(
    calcAge(birthYears[0]),
    calcAge(birthYears[2]),
    calcAge(birthYears[birthYears.length - 1])
);

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[2]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);
