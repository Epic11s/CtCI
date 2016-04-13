var expect = chai.expect;


describe("babyNames", function() {
  const johnCount = [
    ['John', 5],
    ['Johnny', 2],
    ['Jon', 6],
    ['Johny', 1]
  ];
  const johnPairs = [
    ["John", "Johnny"],
    ["Johnny", "Jon"],
    ["Jon", "Johny"]
  ];
  const altJohnPairs = [
    ["John", "Johnny"],
    ["Jon", "Johnny"],
    ["Johny", "Jon"]
  ];

  it("should be a function", function() {
    expect(babyNames).to.be.a('function');
  });

  it("should take arrays of frequencies and equivalent pairs and return an array of unique frequencies", function() {
    expect(Array.isArray(babyNames([], []))).to.equal(true);
    expect(Array.isArray(babyNames(johnCount, johnPairs))).to.equal(true);
  });

  it("should accumulate all related names under 1 name", function() {
    expect(babyNames(johnCount, johnPairs).length).to.equal(1);
    expect(babyNames(johnCount, altJohnPairs).length).to.equal(1);
  });

  it("should report the total frequency for the group of related names", function() {
    expect(babyNames(johnCount, johnPairs)[0][1]).to.equal(14);
    expect(babyNames(johnCount, altJohnPairs)[0][1]).to.equal(14);
  });
});
