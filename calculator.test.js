import calculator from "./calculator.js";

test("Should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("Should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("Should multiply two numbers", () => {
    expect(calculator.multiply(5, 4)).toBe(20);
});

test("Should divide two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
});
