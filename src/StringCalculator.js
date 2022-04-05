const sum = (line) => {
  const numbers = filterOnlyNumbers(line);

  if (numbers.length !== 0) {
    let result = 0;
    numbers.forEach((number) => {
      if (isNaN(parseInt(number))) number = 0;
      result += parseInt(number);
    });
    return result;
  }
  return "Unexpected error"
};



const filterOnlyNumbers = (line) => {
  if (line.includes("\n")) {
    const splitByJumpLine = line.split("\n".trim());
    return splitByJumpLine.filter((number) => !isNaN(parseInt(number)));
  }
  return line.split(",");
};

module.exports = {
  sum,
};
