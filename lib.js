function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function factorial(num) {
    let j = num;
    for (let i = num - 1; i >= 1; i--) {
        j = j * i
    }

    if (j) { return j; }
    else { return -1; }
}

module.exports = {
    avg,
    prime,
    factorial
}