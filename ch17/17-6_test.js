var expect = chai.expect;

describe("count2s", function() {
  it("should be a function", function() {
    expect(count2s).to.be.a('function');
  });

  it("should take a number and return a number", function() {
    expect(count2s(17)).to.be.a('number');
  });

  it("should return 0 if no 2's occur before the number", function() {
    expect(count2s(0)).to.equal(0);
    expect(count2s(1)).to.equal(0);
  });

  it("should return the number of 2's that occur before the input", function() {
    expect(count2s(2)).to.equal(1);
    expect(count2s(25)).to.equal(9);
    expect(count2s(35)).to.equal(14);
    expect(count2s(75)).to.equal(18);
    expect(count2s(82)).to.equal(19);
    expect(count2s(122)).to.equal(26);
  })
})
