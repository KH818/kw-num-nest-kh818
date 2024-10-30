const { test, expect } = require("@jest/globals");//각 함수를 실행시켜 확인 하는 방법

const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("factorial(3) should be 6", () => {
    expect(lib.factorial(3)).toBe(6);
});

test("prime(5) should be true", () => {
    expect(lib.prime(5)).toBe(true);
});