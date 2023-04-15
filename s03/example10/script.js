"use strict";

const jonas = {
    firstName: "Jonas",
    lastName: "Simth",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// . notation vs. [] notation
console.log(jonas.lastName, jonas["lastName"]);
console.log(jonas.friends, jonas["friends"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
    "What do you want to know about Jonas?\n- Choose between:\n- firstName\n- lastName\n- age\n- job\n- friends"
);
console.log(interestedIn);
// console.log(jonas[interestedIn]);
// console.log(jonas.interestedIn);

if (jonas[interestedIn]) {
    console.log(interestedIn);
} else {
    console.log(`${interestedIn} is a wrong request!`);
}

jonas.location = "Portugal";
jonas["language"] = "English";
console.log(jonas);
console.log(jonas["location"]);
console.log(jonas.language);

// Challenge: write...
// "Jonas has 3 friends, and his best friend is called Michael."
console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas["friends"][0]}.`
);

// Alternative
console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`
);
