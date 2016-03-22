/**
 * Testing for 10.2
 * Question: 'Sort anagrams that are next to each other'
 * Func name: 'sortAnagrams'
 *
 * created by Vincent Jo on March 22, 2016
 */

// Testing libraries
var expect = chai.expect;

describe('sortAnagrams', function() {
  it('should be a function', function() {
    expect(sortAnagrams).to.be.a('function');
  });

  it('should sort alphabetically, even if not anagram', function() {
    var input = ['bbb', 'aaa'];
    var result = sortAnagrams(input);
    var expectedResult = ['aaa', 'bbb'];
    expect(result).to.equal(expectedResult);
  });

  it('should sort anagrams without alphabetical conflicts', function() {
    var input = ['abc', 'ddd', 'cba'];
    var result = sortAnagrams(input);
    var expectedResult = ['abc', 'cba', 'ddd'];
    expect(result).to.equal(expectedResult);
  });

  it('should sort anagrams with alphabetical conflicts', function() {
    var input = ['abc', 'bcd', 'afd', 'bdc', 'bac', 'sdc'];
    var result = sortAnagrams(input);

    // 'afd' doesn't have an anagram but it comes before 'bcd',
    // an anagram, because it is alphabetically higher
    var expectedResult = ['abc', 'bac', 'afd', 'bcd', 'bdc', 'sdc'];
    expect(result).to.equal(expectedResult);
  });

  it('should return an empty array if passed an empty array', function() {
    var input = [];
    var result = sortAnagrams([]);
    var expectedResult = [];
    expect(result).to.equal(expectedResult);
  });
});
