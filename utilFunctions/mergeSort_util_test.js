const expect = chai.expect;

describe('mergeSort', function() {
  function randomArray() {
    const len = Math.random()*100 + 1;
    const arr = [];
    for(let i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random()*100));
    }
    return arr;
  }

  function buildArrayHash(arr) {
    return arr.reduce(function(hash, val) {
      if(hash[val] === undefined) hash[val] = 1;
      else hash[val]++;

      return hash;
    }, {})
  }

  function compareHashes(hash1, hash2) {
    const keys1 = Object.keys(hash1);
    if(keys1.length !== Object.keys(hash2).length) return false;
    return keys1.reduce(function(isSame, key) {
      if(hash2[key] !== hash1[key]) return false;
      return isSame
    }, true);
  }

  function checkSort(arr) {
    return arr.reduce(function(isSorted, val, i, arr) {
      if(arr[i-1] && arr[i-1] > arr[i])  return false;
      return isSorted;
    }, true)
  }

  it('should be a function', function() {
    expect(mergeSort).to.be.a('function');
  });

  it('should take an array and return an array of the same length', function() {
    const arr1 = randomArray();
    const arr2 = randomArray();
    const arr3 = randomArray();
    const arr4 = randomArray();

    expect(mergeSort(arr1).length).to.equal(arr1.length);
    expect(mergeSort(arr2).length).to.equal(arr2.length);
    expect(mergeSort(arr3).length).to.equal(arr3.length);
    expect(mergeSort(arr4).length).to.equal(arr4.length);
  });

  it('should take an array and return an array with the same values', function() {
    const arr1 = randomArray();
    const arr2 = randomArray();
    const arr3 = randomArray();
    const arr4 = randomArray();

    const hash1 = buildArrayHash(arr1);
    const hash2 = buildArrayHash(arr2);
    const hash3 = buildArrayHash(arr3);
    const hash4 = buildArrayHash(arr4);
    let sortedArr, sortedHash;

    sortedArr = mergeSort(arr1);
    sortedHash = buildArrayHash(sortedArr);
    expect(compareHashes(sortedHash, hash1)).to.equal(true);

    sortedArr = mergeSort(arr2);
    sortedHash = buildArrayHash(sortedArr);
    expect(compareHashes(sortedHash, hash2)).to.equal(true);

    sortedArr = mergeSort(arr3);
    sortedHash = buildArrayHash(sortedArr);
    expect(compareHashes(sortedHash, hash3)).to.equal(true);

    sortedArr = mergeSort(arr4);
    sortedHash = buildArrayHash(sortedArr);
    expect(compareHashes(sortedHash, hash4)).to.equal(true);
  });

  it('should return an array in increasing sorted order', function() {
    const arr1 = randomArray();
    const arr2 = randomArray();
    const arr3 = randomArray();
    const arr4 = randomArray();

    expect(checkSort(mergeSort(arr1))).to.equal(true);
    expect(checkSort(mergeSort(arr2))).to.equal(true);
    expect(checkSort(mergeSort(arr3))).to.equal(true);
    expect(checkSort(mergeSort(arr4))).to.equal(true);
  });
});
