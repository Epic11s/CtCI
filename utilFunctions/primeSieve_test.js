const expect = chai.expect;

describe("primeSieve", function() {
  const prime5 = [2,3,5];
  const prime10 = [2,3,5,7];
  const prime100 = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

  it("should be a function", function() {
    expect(primeSieve).to.be.a('function');
  });

  it("should take a number and return an array", function() {
    expect(Array.isArray(primeSieve(1))).to.equal(true);
    expect(Array.isArray(primeSieve(5))).to.equal(true);
    expect(Array.isArray(primeSieve(10))).to.equal(true);
    expect(Array.isArray(primeSieve(100))).to.equal(true);
  });

  it("should return an array with the correct number of results", function() {
    expect(primeSieve(1).length).to.equal(0);
    expect(primeSieve(5).length).to.equal(prime5.length);
    expect(primeSieve(10).length).to.equal(prime10.length);
    expect(primeSieve(100).length).to.equal(prime100.length);
  });

  it("should return an array with the primes <= the number given", function() {
    function comparePrimeList(result, expected) {
      console.log(result);
      if (result.length !== expected.length) return false;
      for (var i = 0; i < result.length; i++) {
        if(result[i] !== expected[i]) return false;
      }
      return true;
    }
    expect(comparePrimeList(primeSieve(1), [])).to.equal(true);
    expect(comparePrimeList(primeSieve(5), prime5)).to.equal(true);
    expect(comparePrimeList(primeSieve(10), prime10)).to.equal(true);
    expect(comparePrimeList(primeSieve(100), prime100)).to.equal(true);
  });
});
