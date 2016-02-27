var expect = chai.expect;
var should = chai.should();

describe('peaksAndValleys', function(){
  it('should be a function', function(){
    expect(peaksAndValleys).to.be.a('function');
  });
  it('should return the unaltered set if there are less than 3 values', function(){
    expect(peaksAndValleys([0,1])).to.deep.equal([0,1]);
  });
  it('should return an array sorted into peaks and valleys', function(){
    expect(peaksAndValleys([5,3,1,2,3])).to.deep.equal([3,5,1,3,2]);
  });
  it('should operate on sorted arrays as well as unsorted arrays', function(){
    expect(peaksAndValleys([1,2,3,4,5,6,7])).to.deep.equal([1, 3, 2, 5, 4, 7, 6]);
  });
  it('should operate on arrays sorted in descending order as well as ascending', function(){
    expect(peaksAndValleys([7,6,5,4,3,2,1])).to.deep.equal([6, 7, 4, 5, 2, 3, 1]);
  });
  it('should operate on arrays that have an even or odd number of elements', function(){
    expect(peaksAndValleys([1,2,3,4,5,6,7,1])).to.deep.equal([1, 3, 2, 5, 4, 7, 1, 6]);
  });
});