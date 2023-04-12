"use strict";

// function declaration
function calcAge1(birthYear) {
    // Asumimos que es el año 2037...
    return 2037 - birthYear;
}

console.log(calcAge1(1991));

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

console.log(calcAge2(1991));

// Ejemplos adicionales
console.log(calcAge3(1991));

function calcAge3(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge4(1991));

const calcAge4 = function (birthYear) {
    return 2037 - birthYear;
};
