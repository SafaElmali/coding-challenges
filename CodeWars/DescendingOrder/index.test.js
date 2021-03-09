const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const { descendingOrder } = require("./index");

describe("Return digits in descending order", () => {
  it("123456789 to 987654321", () => {
    expect(descendingOrder(123456789)).equal(987654321);
  });

  it("1 to 1", () => {
    expect(descendingOrder(1)).equal(1);
  });

  it("0 to 0", () => {
    expect(descendingOrder(0)).equal(0);
  });
});
