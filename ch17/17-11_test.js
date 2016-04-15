const expect = require('chai').expect;
const path = require('path');
const wordDistance = require('./ch17_your_solutions.js').wordDistance;

const filePath = path.join(__dirname, '17-11.txt');

describe("wordDistance", function() {
  it("should be a function", function() {
    expect(wordDistance).to.be.a('function');
  });

  it("should take in a file path and two target words and return a word count", function() {
    expect(wordDistance(filePath, 'the', 'test')).to.be.a('number');
  });

  it("should return the smallest distance in words between the targets in any order", function() {
    expect(wordDistance(filePath, 'the', 'test')).to.be.equal(5);
    expect(wordDistance(filePath, 'test', 'the')).to.be.equal(5);
  })
})
