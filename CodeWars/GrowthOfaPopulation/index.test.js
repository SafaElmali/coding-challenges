const chai = require("chai");
const expect = chai.expect;
const {nbYear} = require("./index");

describe("Calculate the total years that a town population needs to be greater than inhabitants", () => {
  it("requires 15 year if p=1500 and percent=5 extra inhabitants=100 expected=5000", () => {
    expect(nbYear(1500, 5, 100, 5000)).equal(15);
  });

  it("requires 10 year if p=1500000 and percent=2.5 extra inhabitants=10000 expected=2000000", () => {
    expect(nbYear(1500000, 2.5, 10000, 2000000)).equal(10);
  });

  it("requires 94 year if p=1500000 and percent=0.25 extra inhabitants=1000 expected=2000000", () => {
    expect(nbYear(1500000, 0.25, 1000, 2000000)).equal(94);
  });
});

