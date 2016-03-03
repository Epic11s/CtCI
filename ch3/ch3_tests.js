var expect = chai.expect;
var should = chai.should();

var stack = new Stack();

afterEach(function() {
  while (stack.length > 0) {
    stack.pop();
  }
});


describe('sortStack', function() {

  it('should be a function', function() {
    expect(sortStack).to.be.a('function');
  });

  it('should sort the stack so that the smallest items are on top', function() {
    var stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    sortStack(stack);
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(3);
    expect(stack.pop()).to.equal(4);
    expect(stack.peek()).to.equal(5);
  });

});

describe('push', function() {

  it('should be a property of a stack', function() {
    expect(stack.push).to.exist;
  });

  it('should be a function', function() {
    expect(stack.push).to.be.a('function');
  });

  it('should add an item to the stack', function() {
    stack.push(4);
    stack.push(5);
    expect(stack.length).to.equal(2);
  });

})

describe('pop', function() {

  it('should be a property of a stack', function() {
    expect(stack.pop).to.exist;
  });

  it('should be a function', function() {
    expect(stack.pop).to.be.a('function');
  });

  it('should remove the last item from the stack', function() {
    stack.push(4);
    stack.push(5);
    expect(stack.pop()).to.equal(5);
    stack.pop();
    expect(stack.length).to.equal(0);
  });

});

describe('peek', function() {

  it('should be a property of a stack', function() {
    expect(stack.peek).to.exist;
  });

  it ('should be a function', function() {
    expect(stack.peek).to.be.a('function');
  });

  it('should return the value of the last item in the stack', function() {
    stack.push(3);
    stack.push(2);
    expect(stack.peek()).to.equal(2);
  });

  it('should not remove the item you are peeking at', function() {
    stack.push(4);
    stack.push(5);
    expect(stack.peek()).to.equal(5);
    expect(stack.length).to.equal(2);
  });
});

describe('isEmpty', function() {

  it('should be a property of a stack', function() {
    expect(stack.isEmpty).to.exist;
  });

  it ('should be a function', function() {
    expect(stack.isEmpty).to.be.a('function');
  });

  it ('should return true if the stack is empty', function() {
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).to.be.true;
  });

  it ('should return false if the stack is not empty', function() {
    stack.push(1);
    expect(stack.isEmpty()).to.be.false;
  });

});