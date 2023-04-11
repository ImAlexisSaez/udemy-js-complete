const age = 23;

age >= 18
    ? console.log("I'd like to drink wine!")
    : console.log("I'd like to drink water!");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I'd like to drink ${age >= 18 ? "wine" : "water"}!`);
