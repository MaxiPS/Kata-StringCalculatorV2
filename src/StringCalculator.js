const sum = (line) => {
  const numbers = filterOnlyNumbers(line);
  let result = 0;
  let negativeNumbers = [];
  if (numbers.length !== 0) {
    numbers.forEach((number) => {
      if (number < 0) {
        negativeNumbers.push(number);
      }
      if (number >= 1000) {
        number = 0;
      }
      result += number;
    });
    if (negativeNumbers.length !== 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
  return result;
};

const filterOnlyNumbers = (line) => {
  if (line.startsWith("//")) {
    const [delimiters, lineProcessed] =
      getCustomDelimitersAndLineProcessed(line);
    return processedLineByDelimiters(lineProcessed, delimiters);
  }
  const delimiters = /,|\n/;
  return processedLineByDelimiters(line, delimiters);
};

const getCustomDelimitersAndLineProcessed = (line) => {
  const separators = line.substring(2, line.indexOf("\n"));
  const newLine = line.substring(line.indexOf("\n") + 1);
  const regexContainerSeparator = /[\[\]]/;

  const delimiters = separators
    .split(regexContainerSeparator)
    .filter((element) => element !== "");
  const delimiterRegExp = new RegExp(`[${delimiters.join("")}]`);
  return [delimiterRegExp, newLine];
};

const processedLineByDelimiters = (line, delimiters) => {
  const splitByDelimiters = line.split(delimiters);
  return splitByDelimiters
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number));
};

module.exports = {
  sum,
};
