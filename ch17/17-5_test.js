var expect = chai.expect;
var should = chai.should();

describe("balancedSubArray", function() {

  it('should be a function', function() {
    expect(balancedSubArray).to.be.a('function')
  });

  it('should take an array and return a number', function() {
    console.log(balancedSubArray([1,2,3]));
    expect(balancedSubArray([])).to.be.a('number');
    expect(balancedSubArray([1,2,3])).to.be.a('number');
    expect(balancedSubArray([1,'a'])).to.be.a('number');
  });

  it('should return 0 if there is no balanced subArray', function() {
    expect(balancedSubArray([])).to.equal(0);
    expect(balancedSubArray([1,2,3,4])).to.equal(0);
    expect(balancedSubArray(['a','b','c','d'])).to.equal(0);
  });

  it('should return the length of the largest sub array with equal numbers and letters', function() {
    expect(balancedSubArray(['a', 1])).to.equal(2);
    expect(balancedSubArray([1, 2, 3,'b','c'])).to.equal(4);
    expect(balancedSubArray([1,2,3,'a','b',4,'c',5,6,7])).to.equal(6);
    expect(balancedSubArray([1,2,3,'a','b',4,'c',5,6,'d','e',7,8,9,10])).to.equal(10);
    expect(balancedSubArray([1,2,3,'a','b',4,'c',5,6,'d','e','f','g',7,8,9,10,11,12,13,14,15,16,17,18])).to.equal(14);
  });
})
