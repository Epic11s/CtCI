const expect = require('chai').expect;
const scheduleMasseuse = require('./ch17_your_solutions.js').scheduleMasseuse;

const requests1 = [];
const answer1 = [];
const requests2 = [15,30,45,60,75,90]; // 180
const answer2 = [30, 60, 90];
const requests3 = [60, 15, 15, 45, 30, 75, 60]; // 180
const answer3 = [60, 45, 75];
const requests4 = [30, 15, 60, 75, 45, 15, 15, 45]; // 180
const answer4 = [30, 60, 45, 45];

describe("scheduleMasseuse", function() {
  it("should be a function", function() {
    expect(scheduleMasseuse).to.be.a('function');
  });

  it("should take an array of times and return an array of times", function() {
    expect(Array.isArray(scheduleMasseuse([]))).to.equal(true);
    expect(Array.isArray(scheduleMasseuse([1,2,3,4]))).to.equal(true);
  });

  it("should return an array of times that maximizes the total time booked without adjacent requests", function() {
    const sum = (array) => array.reduce((sum, val) => sum+val, 0);
    var result;

    result = scheduleMasseuse(requests1);
    expect(sum(result)).to.equal(0);
    result = scheduleMasseuse(requests2);
    expect(sum(result)).to.equal(180);
    result = scheduleMasseuse(requests3);
    expect(sum(result)).to.equal(180);
    result = scheduleMasseuse(requests4);
    expect(sum(result)).to.equal(180);
  });

  it("should return the correct number of appointments", function() {
    expect(scheduleMasseuse(requests1).length).to.equal(0);
    expect(scheduleMasseuse(requests2).length).to.equal(3);
    expect(scheduleMasseuse(requests3).length).to.equal(3);
    expect(scheduleMasseuse(requests4).length).to.equal(4);
  });

  it("should return the array of appointments in order", function() {
    const scheduleCompare = (solution, answer) => {
      for(var i = 0; i < solution.length; i++) {
        if(solution[i] !== answer[i]) return false;
      }
      return true;
    }
    var solution;

    solution = scheduleMasseuse(requests1);
    expect(scheduleCompare(solution, answer1)).to.equal(true);
    solution = scheduleMasseuse(requests2);
    expect(scheduleCompare(solution, answer2)).to.equal(true);
    solution = scheduleMasseuse(requests3);
    expect(scheduleCompare(solution, answer3)).to.equal(true);
    solution = scheduleMasseuse(requests4);
    expect(scheduleCompare(solution, answer4)).to.equal(true);
  });
});
