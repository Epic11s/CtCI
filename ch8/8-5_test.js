const expect = chai.expect;

describe('recursiveMultiply', function() {
  it('should be a function', function() {
    expect(recursiveMultiply).to.be.a('function');
  });

  it('should be a recursive function', function() {
    const strFn = recursiveMultiply.toString();
    const r = /recursiveMultiply\(/g;
    var functionCalls = 0;
    while(r.exec(strFn) !== null) {
      functionCalls++;
    }
    expect(functionCalls > 1).to.equal(true);
  });

  it('should not use the * operator', function() {
    const strFn = recursiveMultiply.toString();
    expect(strFn.indexOf('*')).to.equal(-1);
  });

  it('should return the correct product of a multiplication', function() {
    expect(recursiveMultiply(5, 3)).to.equal(15);
    expect(recursiveMultiply(5, 5)).to.equal(25);
    expect(recursiveMultiply(3, 5)).to.equal(15);
    expect(recursiveMultiply(5, 20)).to.equal(100);
    expect(recursiveMultiply(20, 5)).to.equal(100);
    expect(recursiveMultiply(7, 3)).to.equal(21);
    expect(recursiveMultiply(3, 7)).to.equal(21);
  });

  it('should minimize the recursive calls(and operations)', function() {
    function testArgs(a, b) {
      var callCount = 0, counts = [];
      const original = recursiveMultiply;
      recursiveMultiply = function() {
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
    counts = testArgs(5, 20);
    expect(counts[0]).to.equal(counts[1]);
    counts = testArgs(3,7);
    expect(counts[0]).to.equal(counts[1]);
  })
})
