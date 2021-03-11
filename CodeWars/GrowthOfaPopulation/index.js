// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

const nbYear = (p0, percent, aug, p) => {
  if (p0 > p) {
    return 0;
  } else {
    const yearlyInhabitant = p0 + p0 * (percent / 100) + aug;
    return 1 + nbYear(yearlyInhabitant, percent, aug, p);
  }
};

module.exports.nbYear = nbYear;
