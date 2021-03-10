function list(names) {
  let str = "";
  while (true) {
    if(!names.length) return str;
    if (names.length === 1) return (str += names[0].name);
    else if (names.length === 2)
      return (str += `${names[0].name} & ${names[1].name}`);
    else {
      str += `${names[0].name}, `;
      names.splice(0, 1);
    }
  }
}

module.exports.list = list;
