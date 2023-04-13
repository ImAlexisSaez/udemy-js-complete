"use strict";

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

function yearsUntilRetirement2(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}

console.log(yearsUntilRetirement2(1991, "Jonas"));
console.log(yearsUntilRetirement2(1970, "Bob"));
