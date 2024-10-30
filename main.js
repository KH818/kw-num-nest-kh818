#!/usr/bin/env node

const lib = require("./lib");

function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "avg":
        result = avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "factorial":
        result = lib.factorial(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);