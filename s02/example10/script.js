console.log(Boolean(0), Boolean(undefined), Boolean("Jonas"), Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

// let height;

// if (height) {
//     console.log("Yay! Height is defined!");
// } else {
//     console.log("Height is undefined");
// }

let height = 0;

if (height) {
    console.log("Yay! Height is defined!");
} else {
    console.log("Height is undefined");
}
