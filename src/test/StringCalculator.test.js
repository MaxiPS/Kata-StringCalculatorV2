/*
 1      => 1
 ""     => 0
 " "    => 0
 1,2    => 3
 1,2,,  => 3
 1,2,A,,=> 3
 1\n2,3 => 6
 "1,\n" => 1
*/

const { sum } = require("../StringCalculator");

describe("StringCalculator Should", () => {
  test("return_the_same_number_given_a_single_number", () => {
    expect(sum("1")).toBe(1);
  });

  test("return_zero_given_an_empty_line", () => {
    expect(sum("")).toBe(0);
    expect(sum("  ")).toBe(0);
  });

  test("return_the_result_of_a_sum", () => {
    expect(sum("1,2")).toBe(3);
  });

  test("ignore_all_not_integer_numbers", () => {
    expect(sum("1,2,,")).toBe(3);
    expect(sum(",,1,2,")).toBe(3);
    expect(sum("1,2,A,,")).toBe(3);
    expect(sum("1, ,A,2,")).toBe(3);
    expect(sum("1,   ,A,2,,,")).toBe(3);
  });

  test("return_the_result_when_the_line_contains_jumps_line_between_numbers", () => {
    expect(sum("1\n2,3")).toBe(6);
    expect(sum("1,\n")).toBe(1);
  });
});
