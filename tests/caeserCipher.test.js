import { caeserCipher } from "../src/caeserCipher.js";

test("char wrapping from z to a", () => {
  expect(caeserCipher("xyz", 3)).toBe("abc");
});

test("char wrapping from a to z (negative shift)", () => {
  expect(caeserCipher("abc", -3)).toBe("xyz");
});

test("case preservation", () => {
  expect(caeserCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation, spaces, special chars ignored", () => {
  expect(caeserCipher("$Hello, World!", 3)).toBe("$Khoor, Zruog!");
});
