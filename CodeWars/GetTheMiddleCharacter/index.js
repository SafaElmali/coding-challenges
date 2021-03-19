const getMiddle = (s) => {
  if (s.length === 1) return s;
  else if (s.length % 2 === 0) {
    const mid = s.length / 2;
    return `${s[mid - 1]}${s[mid]}`;
  } else {
    const mid = Math.round(s.length / 2);
    return `${s[mid - 1]}`;
  }
};

module.exports = getMiddle;
