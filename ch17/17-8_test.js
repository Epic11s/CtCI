var expect = chai.expect;

describe("circusTower", function() {
  const troop1 = [[1, 9], [3, 8], [4,10], [6, 12], [5, 15]]; // 3
  const troop2 = [[55, 90], [95, 103], [75, 115], [73, 125] [80, 118], [77, 125], [91, 123], [81, 148], [104, 147]]; //5
  function troopRandomizer(troop) {
    const random = [];
    while (troop.length) {
      random.push(troop.splice((Math.random() * troop.length), 1);
    }
  }

  it("should be a function", function() {
    expect(circusTower).to.be.a('function');
  });

  it("should take an array of people and return an array of people", function() {
    expect(Array.isArray(circusTower([]))).to.equal(true);
    expect(Array.isArray(circusTower([[5,12], [1,9]]))).to.equal(true);
  });

  it("should return the people in order from smallest to largest", function() {
    function orderCheck(arr) {
      for(let i = 1; i <= arr.length; i++) {
        let person = arr[i], last = arr[i-1];
        if(person[0] <= last[0] || person[1] <= last[1]) return false;
      }
      return true;
    }

    let result = circusTower(troopRandomizer(troop1));
    expect(orderCheck(result)).to.equal(true);

    result = circusTower(troopRandomizer(troop2));
    expect(orderCheck(result)).to.equal(true);
  });

  it("should return the largest tower of people possible", function() {
    expect(circusTower(troop1).length).to.equal(3);
    expect(circusTower(troop2).length).to.equal(5);
  });
});
