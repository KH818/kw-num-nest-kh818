const { test, expect } = require("@jest/globals"); //직접 실행을 시켜서 오류를 확인하는 방법

const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Not numbers!", () => {
    const main = spawn("node", ["main.js", "avg", "a"]);    //cmd에 이렇게 입력 한다
    const outputs = []; //입력했을 때의 output을 여기에 담는다
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Some arguments are not numbers!")  //오류가 났을 때 이렇게 나올거라고 예상한다.
    });
});

test("Wrong command", () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});