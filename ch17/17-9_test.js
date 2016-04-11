var expect = chai.expect;

describe("kthMultiple", function() {
  function primeSieve(n) {
    const sqrtN = Math.sqrt(n);
    const list = [false, false];
    for (let i = 2; i <= n; i++) {
      list[i] = true;
    }


    for(let num = 2; num <= sqrtN; num++) {
      if(list[num]) {
        let mult = num*num;
        while(mult <= n) {
          list[mult] = false;
          mult += num;
        }
      }
    }

    return list.reduce((primes, isPrime, i) => (isPrime ? primes.concat(i) : primes), []);
  }

  function primeCheck(val) {
    console.log(val, "val");
    const sqrtVal = Math.floor(Math.sqrt(val));
    const primes = primeSieve(sqrtVal).filter((prime) => prime!==3 && prime!==5 && prime!==7);
    console.log(primes, ' primes');
    return primes.reduce((pass, prime) => ((pass && val%prime) ? true : false), true);
  }
  it("should be a function", function() {
    expect(kthMultiple).to.be.a('function');
  });

  it("should take a number and return a number", function() {
    expect(kthMultiple(5)).to.be.a('number');
  });

  it("should return null if 0 is input", function() {
    expect(kthMultiple(0)).to.equal(null);
  });

  // it("should return a number whose only prime factors are 3, 5 or 7", function() {
  //   for(let i = 0; i < 20; i++) {
  //     let random = Math.floor((Math.random() * 100)+1);
  //     console.log(random, "random");
  //     expect(primeCheck(kthMultiple(random))).to.equal(true);
  //   }
  // });

  it("should return the the kth number whose only prime factors are 3, 5 or 7", function() {
    expect(kthMultiple(1)).to.equal(1);
    expect(kthMultiple(3)).to.equal(5);
    expect(kthMultiple(5)).to.equal(9);
    expect(kthMultiple(7)).to.equal(21);
  });
})
