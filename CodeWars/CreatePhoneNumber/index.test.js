const chai = require("chai");
const expect = chai.expect;

const { createPhoneNumber } = require("./index");

describe("Convert 10 integer array to phone numbers", () => {
  it("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] to (123) 456-7890", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).equal(
      "(123) 456-7890"
    );
  });


  it("[1, 1, 1, 1, 1, 1, 1, 1, 1, 1] to (111) 111-1111", () => {
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).equal(
      "(111) 111-1111"
    );
  });

  it("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] to (123) 456-7890", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).equal(
      "(123) 456-7890"
    );
  });
});
