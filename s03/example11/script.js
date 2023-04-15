"use strict";

const jonas = {
    firstName: "Jonas",
    lastName: "Simth",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // },

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${
            this.firstName
        } is a ${this.calcAge()}-year old teacher, and he has ${
            this.hasDriversLicense ? "a" : "no"
        } diver's license.`;
    },
};
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge:
// "Jonas is a 46-year old teacher, and he has a/no driver's license."
console.log(jonas.getSummary());
