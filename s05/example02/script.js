"use strict";

// Dado un array de temperaturas, calcula la variación total.
// Considera que algunas mediciones pueden arrojar como resultado un error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Entendiendo el problema:
//      - ¿Qué es la variación total de temperatura?
//         Es la diferencia entre el máximo y el mínimo valor del array.
//      - ¿Cómo calculamos los valores máximo y el mínimo en un array?
//      - ¿Cómo se representa un error de medición en el array?
//        ¿Qué hacemos cuando encontremos uno?
//        En el array de datos, figuran como `"error"` y simplemente los ignoraremos.

// 2) Rompiendo el problema en subproblemas:
//      - ¿Cómo ignoramos los errores de medición?
//      - Encuentra el valor máximo del array.
//      - Encuentra el valor mínimo del array.
//      - Realiza la diferencia entre ambos valores (variación total) y devuélvelo.

const calcMinMaxTemp = function (arr) {
    let minTemp = arr[0];
    let maxTemp = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currTemp = arr[i];

        // ignore "error" values
        if (typeof currTemp !== "number") continue;

        // update min & max values
        if (currTemp < minTemp) minTemp = currTemp;
        if (currTemp > maxTemp) maxTemp = currTemp;
    }

    return [minTemp, maxTemp];
};

// Calculates amplitude for one array
const calcTempAmplitude = function (temps) {
    const valuesMinMax = calcMinMaxTemp(temps);
    return valuesMinMax[1] - valuesMinMax[0];
};

const tempAmplitude = calcTempAmplitude(temperatures);
console.log(tempAmplitude);

// Calculates amplitude for two arrays
const calcTempAmplitudeNew = function (temps1, temps2) {
    const temps = temps1.concat(temps2);
    return calcTempAmplitude(temps);
};

const tempAmplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(tempAmplitudeNew);
