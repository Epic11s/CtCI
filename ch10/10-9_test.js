var expect = chai.expect;


describe('sortedMatrixSearch', function() {
  it('should be a function', function() {
    expect(sortedMatrixSearch).to.be.a('function');
  });

  it('should take a matrix and a target and return an array', function() {
    expect(Array.isArray(sortedMatrixSearch([[],[]], 0))).to.equal(true);
    expect(Array.isArray(sortedMatrixSearch([[1,2,3],[4,5,6]], 0))).to.equal(true);
  });

  it('should return an array with one value === false if target not found', function() {
    var result;

    result = sortedMatrixSearch([[],[]], 0);
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal(false);

    result = sortedMatrixSearch([[1,2,3],[4,5,6], 0]);
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal(false);
  });

  it('should return an array with the coordinates, [row, col], of the target', function() {
    var result;

    result = sortedMatrixSearch([[1,2,3],[4,5,6]],5);
    expect(result.length).to.equal(2);
    expect(result[0]).to.equal(1);
    expect(result[1]).to.equal(1);

    result = sortedMatrixSearch([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]],16);
    expect(result.length).to.equal(2);
    expect(result[0]).to.equal(3);
    expect(result[1]).to.equal(0);

    result = sortedMatrixSearch([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]],15);
    expect(result.length).to.equal(2);
    expect(result[0]).to.equal(2);
    expect(result[1]).to.equal(4);
  })
})
