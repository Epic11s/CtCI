var expect = chai.expect;
var should = chai.should();

describe('findMajority', function() {
  it('should be a function', function() {
    expect(findMajority).to.be.a('function');
  });

  it('should take an array and return a number', function() {
    expect(findMajority([1,1])).to.be.a('number');
    expect(findMajority([])).to.be.a('number');
  });

  it('should not mutate the original array', function() {
    'use strict';
    var arr = [1,2,3,4,5,6,7];
    Object.freeze(arr);

    expect(findMajority(arr)).to.be.a('number');
  });

  it('should return the majority element', function() {
    var array1 = [1,2,3,1,2,0,1,1,1,2,1]; //1
    var array2 = [1,2,1,2,1,1,3,2,1]; //1
    var array3 = [2,3,2,1,1,1,1,1]; //1
    var array4 = [1,1,2,2,3,2,1,1,1,1,1]; //1
    var array5 = [1,2,3,2,1,2,1,2,1,1,1]; //1
    var arrays = [array1, array2, array3, array4, array5];
    var results = arrays.reduce(function(results, arr) {
      return results.concat(findMajority(arr));
    }, []);
    expect(results.filter(function(num) { return num === 1; }).length).to.equal(5);
  });

  it('should return -1 if there is no majority', function() {
    var array1 = [2,3,1,2,0,1,1,1,2,1]; //-1
    var array2 = [1,2,1,4,3]; //-1
    var array3 = [2,3,2,1,4,5,6,7]; //-1
    var array4 = [1,2,2,3,2,1,1,1]; //-1
    var array5 = [2,3,2,1,2,1,2,1,1]; //-1
    var arrays = [array1, array2, array3, array4, array5];
    var results = arrays.reduce(function(results, arr) {
      return results.concat(findMajority(arr));
    }, []);
    expect(results.filter(function(num) { return num === -1; }).length).to.equal(5);
  });
});
