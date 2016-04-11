var expect = chai.expect;

describe("kthMultiple", function() {
  function primeCheck(val) {
    const sqrtVal = Math.floor(Math.sqrt(val));
    const primes = primeSieve(sqrtVal).filter((prime) => prime!==3 && prime!==5 && prime!==7);
    return primes.reduce((pass, prime) => (pass ? val%prime : pass), true);
  }
  it("should be a function", function() {
    expect(kthMultiple).to.be.a('function');
  });

  it("should take a number and return a number", function() {
    expect(kthMultiple(5)).to.be.a('number');
  });

  it("should return null if 0 is input", function() {
    expect(kthMultiple(0).to.equal(null));
  });

  it("should return a number whose only prime factors are 3, 5 or 7", function() {
    for(let i = 0; i < 20) {
      let random = Math.floor((Math.random() * 100)+1)
      expect(primeCheck(kthMultiple(random))).to.equal(true);
    }
  });

  it("should return the the kth number whose only prime factors are 3, 5 or 7", function() {
    expect(kthMultiple(1)).to.equal(1);
    expect(kthMultiple(3)).to.equal(5);
    expect(kthMultiple(5)).to.equal(9);
    expect(kthMultiple(7)).to.equal(21);  
  });
})
