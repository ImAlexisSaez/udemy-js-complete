const hasDriversLicense = true;
const hasGoodVision = true;

// AND
console.log(hasDriversLicense && hasGoodVision);

// OR
console.log(hasDriversLicense || hasGoodVision);

// NOT
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
