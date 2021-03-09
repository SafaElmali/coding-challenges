// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

const descendingOrder = (n) => {
  if (typeof n !== "number") throw new TypeError ("Argument should be a number!");
  const numToArray = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(numToArray);
};

module.exports.descendingOrder = descendingOrder;
