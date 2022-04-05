const sumString = (line) => {
  if (line === "" || line.trim() === "") return 0;

  const numbers = line.split(",");
  if (numbers.length !== 0) {
    let result = 0;
    numbers.forEach((number) => {
      if (isNaN(parseInt(number))) number = 0;
      result += parseInt(number);
    });
    return result;
  }
  
  return line;
};

module.exports = {
  sumString,
};
