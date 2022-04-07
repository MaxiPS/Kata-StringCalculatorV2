const { sum } = require("../StringCalculator");

describe("StringCalculator Should", () => {
  test("return the same number given a single number", () => {
    expect(sum("1")).toBe(1);
    expect(sum("2")).toBe(2);
  });

  test("return zero given an empty line", () => {
    expect(sum("")).toBe(0);
    expect(sum("  ")).toBe(0);
  });

  test("return the result of a sum when the delimeter is a coma", () => {
    expect(sum("1,2")).toBe(3);
    expect(sum("12,2")).toBe(14);
  });

  test("ignore all not integer numbers", () => {
    expect(sum("1,2,,")).toBe(3);
    expect(sum(",,1,2,")).toBe(3);
    expect(sum("11,2.1,A,,")).toBe(13);
    expect(sum("1, ,A,2,")).toBe(3);
    expect(sum("1,   ,A,2,,,")).toBe(3);
  });

  test("return the result even when the line contains jumps line between numbers", () => {
    expect(sum("11\n2,3")).toBe(16);
    expect(sum("1,\n")).toBe(1);
    expect(sum("\n\n,1,\n2")).toBe(3);
  });

  test("sum the numbers even when they are separated by custom delimiters", () => {
    expect(sum("//;\n1;2;3")).toBe(6);
    expect(sum("//[*][%]\n1*2%3")).toBe(6);
    expect(sum("//[***]\n1***2***3")).toBe(6);
  });

  test("throw an exception if the line contains negative numbers", () => {
    expect(() => sum("1,-2,-3")).toThrowError("Negatives not allowed: -2, -3");
    expect(() => sum("1,-2,-3,1,-5")).toThrowError(
      "Negatives not allowed: -2, -3, -5"
    );
  });

  test("ignore numbers greater and equal to 1000", () => {
    expect(sum("1000,2")).toBe(2);
    expect(sum("\n1000,2")).toBe(2);
    expect(sum("//```\n10```2")).toBe(12);
  });
});
