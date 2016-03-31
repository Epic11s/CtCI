var expect = chai.expect;

describe('smallestDiff', function() {
  it('should be a function', function() {
    expect(smallestDiff).to.be.a('function');
  });

  it('should return a number', function() {
    expect(smallestDiff([1,2,3], [4,5,6])).to.be.a('number');
  });

  it('should return the smallest difference between 1 number from each array', function() {
    expect(smallestDiff([1,2,3], [4,5,6])).to.equal(1);
    expect(smallestDiff([1,2,3], [5,5,6])).to.equal(2);
    expect(smallestDiff([3,1,3], [4,5,6,0])).to.equal(1);
    expect(smallestDiff([126,278,37], [4,79,376])).to.equal(33);
  });
})
