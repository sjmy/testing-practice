import { reverseString } from "../src/reverseString.js";

test("one word string", () => {
  expect(reverseString("cheesecake")).toBe("ekaceseehc");
});

test("multi word string with punctuation", () => {
  expect(reverseString("I sure like cheesecake!")).toBe(
    "!ekaceseehc ekil erus I",
  );
});
