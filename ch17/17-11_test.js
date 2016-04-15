const wordDistance = require('./ch17_your_solutions.js').wordDistance;

describe("wordDistance", function() {
  it("should be a function", function() {
    expect(wordDistance).to.be.a('function');
  });

  it("should take in a file path and two target words and return a word count", function() {
    expect(wordDistance('17-11.txt', 'the', 'test')).to.be.a('number');
  });

  it("should return the smallest distance in words between the targets in any order", function() {
    expect(wordDistance('17-11.txt', 'the', 'test')).to.be.equal(5);
    expect(wordDistance('17-11.txt', 'test', 'the')).to.be.equal(5);
  })
})
