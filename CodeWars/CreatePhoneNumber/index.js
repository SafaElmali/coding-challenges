const createPhoneNumber = (numbers) => {
  const start = numbers.splice(0, 3).join("");
  const middle = numbers.splice(0, 3).join("");
  const end = numbers.join("");

  return `(${start}) ${middle}-${end}`;
};

exports.createPhoneNumber = createPhoneNumber;
