const chai = require("chai");

const expect = chai.expect;

const { list } = require("./index");

describe("Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.", () => {
  it("Must return Bart, Lisa, Maggie, Homer & Marge", () => {
    expect(
      list([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Homer" },
        { name: "Marge" },
      ])
    ).equal("Bart, Lisa, Maggie, Homer & Marge");
  });

  it("Must return Bart, Lisa & Maggie", () => {
    expect(
      list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).equal("Bart, Lisa & Maggie");
  });

  it("Must return Bart & Lisa", () => {
    expect(list([{ name: "Bart" }, { name: "Lisa" }])).equal("Bart & Lisa");
  });

  it("Must return Bart", () => {
    expect(list([{ name: "Bart" }])).equal("Bart");
  });

  it("Must return empty string", () => {
    expect(list([])).equal("");
  });
});
