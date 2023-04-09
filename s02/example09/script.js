// type conversion
const inputYear = "1991";
const inputYearNum = Number(inputYear);
console.log(inputYearNum + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");

console.log("23" - "10" - "3");

console.log("23" * 2, "23" * "2", "23" / 2, "23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
