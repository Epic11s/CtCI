var expect = chai.expect;
var should = chai.should();

describe("balancedSubArray", function() {

  it('should be a function', function() {
    expect(balancedSubArray).to.be.a('function')
  });

  it('should take an array and return a number', function() {
    expect(balancedSubArray([])).to.be.a('number');
    expect(balancedSubArray([1,2,3])).to.be.a('number');
    expect(balancedSubArray([1,'a'])).to.be.a('number');
  });

  it('should return 0 if there is no balanced subArray', function() {
    expect(balanced([])).to.be(0);
    expect(balanced([1,2,3,4])).to.be(0);
    expect(balanced(['a','b','c','d'])).to.be(0);
  });

  it('should return the length of the largest sub array with equal numbers and letters', function() {
    expect(balanced(['a', 1])).to.be(2);
    expect(balanced(['a', 1, 2, 3,'b','c'])).to.be(4);
    expect(balanced([1,2,3,'a','b',4,'c',5,6,7])).to.be(6);
    expect(balanced([1,2,3,'a','b',4,'c',5,6,'d','e',7,8,9,10])).to.be(10);
    expect(balanced([1,2,3,'a','b',4,'c',5,6,'d','e','f','g',7,8,9,10,11,12,13,14,15,16,17,18])).to.be(14);
  });
})
