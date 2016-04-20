const expect = require('chai').expect;
const path = require('path');
const smallestK = require('./ch17_your_solutions.js').smallestK;

const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = [3,12,54,17,93,65,4,76,48,9];

describe("smallestK", function() {
  it("should be a function", function() {
    expect(smallestK).to.be.a('function');
  });

  it("should take an array of numbers and a target count K and return an array of length K", function() {
    var k = 3;
    expect(smallestK(array1, k).length).to.equal(k);
    expect(smallestK(array2, k).length).to.equal(k);
    var k = 1;
    expect(smallestK(array1, k).length).to.equal(k);
    expect(smallestK(array2, k).length).to.equal(k);
    var k = 5;
    expect(smallestK(array1, k).length).to.equal(k);
    expect(smallestK(array2, k).length).to.equal(k);
  });

  it("should return the three smallest numbers from the original array in the result", function() {
    function checkSmallest(array) {
      const args = Array.prototype.reduce.call(arguments, function(obj, num) {
        obj[num] = true;
        return obj;
      }, {});

      return (
        array.map(function(val){
          return args[val];
        })
        .reduce(function(containsAll, val) {
          return containsAll ? val : containsAll;
        }, true);
      )
    }
    var result;

    result = smallestK(array1, 3);
    expect(checkSmallest(result, 1, 2, 3)).to.equal(true);
    result = smallestK(array1, 2);
    expect(checkSmallest(result, 1, 2)).to.equal(true);
    result = smallestK(array1, 1);
    expect(checkSmallest(result, 1)).to.equal(true);

    result = smallestK(array2, 3);
    expect(checkSmallest(result, 3, 4, 9)).to.equal(true);
    result = smallestK(array2, 2);
    expect(checkSmallest(result, 3, 4)).to.equal(true);
    result = smallestK(array2, 1);
    expect(checkSmallest(result, 3)).to.equal(true);
  });
})
