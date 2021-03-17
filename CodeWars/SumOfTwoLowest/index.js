// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

const sumTwoSmallestNumbers = (numbers) => {
  if (!Array.isArray(numbers))
    return new TypeError("parameter is not an array!");
  const sortedOrder = numbers.sort((a, b) => a - b);
  const onlyPositiveIntegers = sortedOrder.filter((num) => num > 0);
  return onlyPositiveIntegers[0] + onlyPositiveIntegers[1];
};

module.exports = sumTwoSmallestNumbers;
