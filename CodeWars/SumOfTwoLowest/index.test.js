const chai = require("chai");
const expect = chai.expect;

const sumTwoSmallestNumbers = require("./index");

describe("Sum of two lowest positive integers", () => {
  it("should throw error if argument is not an array", () => {
    expect(sumTwoSmallestNumbers("2")).to.throw(TypeError);
    expect(sumTwoSmallestNumbers(5)).to.throw(TypeError);
    expect(sumTwoSmallestNumbers(false)).to.throw(TypeError);
  });

  it("sum of [5, 8, 12, 19, 22] is 13", () => {
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).equal(13);
  });

  it("sum of [15, 28, 4, 2, 43] is 6", () => {
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).equal(6);
  });

  it("sum of [3, 87, 45, 12, 7] is 10", () => {
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).equal(10);
  });

  it("sum of [23, 71, 33, 82, 1] is 1", () => {
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).equal(24);
  });

  it("sum of [52, 76, 14, 12, 4] is 1", () => {
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).equal(16);
  });
});
