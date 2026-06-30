import {
  isPaindrome_usingStringConv,
  isPaindrome_usingStringSplit,
  isPaindrome_usingPointers,
} from "./ispalindrome_integet";

const implementations = [
  { name: "isPaindrome_usingStringConv", fn: isPaindrome_usingStringConv },
  { name: "isPaindrome_usingStringSplit", fn: isPaindrome_usingStringSplit },
  { name: "isPaindrome_usingPointers", fn: isPaindrome_usingPointers },
];

describe.each(implementations)("$name", ({ fn }) => {
  it("should return true for a palindrome integer", () => {
    expect(fn(121)).toBe(true);
  });

  it("should return false for a non-palindrome integer", () => {
    expect(fn(-121)).toBe(false);
    expect(fn(10)).toBe(false);
  });

  it("should return true for a single-digit integer", () => {
    expect(fn(7)).toBe(true);
  });

  it("should return true for a palindrome integer with even number of digits", () => {
    expect(fn(1221)).toBe(true);
  });

  it("should return false for a non-palindrome integer with even number of digits", () => {
    expect(fn(1234)).toBe(false);
  });
});
