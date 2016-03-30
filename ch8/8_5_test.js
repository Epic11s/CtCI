const expect = chai.expect;

describe('recurseMultiply', function() {
  it('should be a function', function() {
    expect(recurseMultiply).to.be.a('function');
  });

  it('should be a recursive function', function() {
    const strFn = recurseMultiply.toString();
    const r = /recurseMultiply\(/g;
    var functionCalls = 0;
    while(r.exec(strFn) !== null) {
      functionCalls++;
    }
    expect(functionCalls > 1).to.be(true);
  });

  it('should not use the * operator', function() {
    const strFn = recurseMultiply.toString();
    expect(strFn.indexOf('*')).to.be(-1);
  });

  it('should return the correct product of a multiplication', function() {
    expect(recurseMultiply(5, 3)).to.equal(15);
    expect(recurseMultiply(5, 5)).to.equal(25);
    expect(recurseMultiply(3, 5)).to.equal(15);
    expect(recurseMultiply(5, 20)).to.equal(100);
    expect(recurseMultiply(20, 5)).to.equal(100);
    expect(recurseMultiply(7, 3)).to.equal(21);
    expect(recurseMultiply(3, 7)).to.equal(21);
  });

  it('should minimize the recursive calls(and operations)', function() {
    function testArgs(a, b) {
      var callCount = 0, counts = [];
      const original = recursiveMultiply;
      const recursiveMultiply = function() {
        callCount++;
        return original.apply(null, arguments);
      }
      recursiveMultiply(5,3);
      counts.push(callCount);
      callCount = 0;
      recursiveMultiply(3,5)
      counts.push(callCount);
      callCount = 0;
      return counts;
    }
    var counts;
    counts = testArgs(5,3);
    expect(counts[0]).to.equal(counts[1]);
    testArgs(5, 20);
    expect(counts[0]).to.equal(counts[1]);
    testArgs(3,7);
    expect(counts[0]).to.equal(counts[1]);
  })
})
