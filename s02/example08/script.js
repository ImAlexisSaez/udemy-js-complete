// Ejemplo 1
const age = 15;

if (age >= 18) {
    console.log("Sarah can take the driver's license exam!");
} else {
    const yearsLeft = 18 - age;
    console.log(
        `Sarah is yoo young. She'll have to wait another ${yearsLeft} years.`
    );
}

// Ejemplo 2
const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Born in the ${century}th century!`);
