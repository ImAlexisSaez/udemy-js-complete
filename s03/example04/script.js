"use strict";

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));

// const yearsUntilRetirment = (birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// };
// console.log(yearsUntilRetirment(1991));

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirment(1991, "Jonas"));
