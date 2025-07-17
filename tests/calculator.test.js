import calculator from "../src/calculator.js";

test("add", () => {
  expect(calculator.add(17, 4)).toBe(21);
});

test("subtract", () => {
  expect(calculator.subtract(17, 4)).toBe(13);
});

test("divide", () => {
  expect(calculator.divide(17, 4)).toBeCloseTo(4.25);
});

test("multiply", () => {
  expect(calculator.multiply(17, 4)).toBe(68);
});
