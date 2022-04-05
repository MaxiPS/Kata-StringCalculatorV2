/*
 1 => 1
 "" => 0
 " " => 0
 1,2 = 3
 1,2,, = 3
 1,2,A,,= 3
*/

const { sumString } = require("../StringCalculator");

describe("StringCalculator Should", () => {

  test("return_the_same_number_given_a_single_number", () => {
    expect(sumString("1")).toBe(1);
  });

  test("return_zero_given_an_empty_line", () => {
    expect(sumString("")).toBe(0);
  });

  test("return_the_result_of_a_sum", () => {
    expect(sumString("1,2")).toBe(3);
  });

  test("ignore_all_not_integer_numbers", () => {
    expect(sumString("1,2,,")).toBe(3);
    expect(sumString(",,1,2,")).toBe(3);
    expect(sumString("1,2,A,,")).toBe(3);
    expect(sumString("1, ,A,2,")).toBe(3);
    expect(sumString("1,   ,A,2,,,")).toBe(3);
  });

});
