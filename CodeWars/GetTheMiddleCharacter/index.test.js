// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

const chai = require("chai");
const expect = chai.expect;

const getMiddle = require("./index");

describe("Get the middle character", () => {
  it('"test" should return "es"', () => {
    expect(getMiddle("test")).to.equal("es");
  });

  it('"testing" should return "t"', () => {
    expect(getMiddle("testing")).to.equal("t");
  });

  it('"middle" should return "dd"', () => {
    expect(getMiddle("middle")).to.equal("dd");
  });

  it('"A" should return "A"', () => {
    expect(getMiddle("A")).to.equal("A");
  });
});
