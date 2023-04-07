const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2037;

const jonas =
    "I'm " +
    firstName +
    ", a " +
    (currentYear - birthYear) +
    " years old " +
    job +
    "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${
    currentYear - birthYear
} years old ${job}!`;

console.log(jonasNew);

const greeting = `Hello world!`;
console.log(greeting);

console.log(`String with
multiple
lines`);
