const sum = (line) => {
  const numbers = filterOnlyNumbers(line);
  let result = 0;
  let negativeNumbers = [];

  if (numbers.length !== 0) {
    numbers.forEach((number) => {
      if (number < 0) {
        negativeNumbers.push(number);
      }
      if (isNaN(parseInt(number)) || parseInt(number) >= 1000) {
        number = 0;
      }
      result += parseInt(number);
    });

    if (negativeNumbers.length !== 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    return result;
  }
};

const filterOnlyNumbers = (line) => {
  if (line.includes("\n")) {
    console.log(line.split("\n".trim()));
    const splitByJumpLine = line.split("\n".trim());
    return splitByJumpLine.filter((number) => !isNaN(parseInt(number)));
  }
  return line.split(",");
};

// //^(.*?)//\n
// //[separator]\n1;2
// const [separator, ...list] = line.split("\n")

module.exports = {
  sum,
};
