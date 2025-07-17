import { capitalize } from "../src/capitalize.js";

test("one word string", () => {
  expect(capitalize("helLo")).toBe("HelLo");
});

test("string with spaces and punctuation", () => {
  expect(capitalize("hello WORLD!!")).toBe("Hello WORLD!!");
});

test("string with already capitalized first letter", () => {
  expect(capitalize("Hello world")).toBe("Hello world");
});
