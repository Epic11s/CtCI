var expect = chai.expect;
var should = chai.should();

describe('minimalTree solution', function() {

  describe('BinaryNode', function() {
    it('should be a function', function() {
      expect(BinaryNode).to.be.a('function');
    });
    it('should create an object', function() {
      expect(new BinaryNode()).to.be.a('object');
    });
    it('should have a depth function', function() {
      var node = new BinaryNode(5);
      expect(node.depth).to.be.a('function');
    });
    it('should have a depth function that returns the depth of the tree', function() {
      var node5 = new BinaryNode(5);
      var node4 = new BinaryNode(4);
      var node3 = new BinaryNode(3);
      var node2 = new BinaryNode(2);
      expect(node5.depth()).to.equal(0);
      node5.leftChild = node4;
      expect(node5.depth()).to.equal(1);
      expect(node4.depth()).to.equal(0);
      node4.leftChild = node3;
      node3.leftChild = node2;
      expect(node5.depth()).to.equal(3);
      expect(node4.depth()).to.equal(2);
      expect(node3.depth()).to.equal(1);
      expect(node2.depth()).to.equal(0);
    });
  });

  describe('minimalTree', function() {
    it('should be a function', function() {
      expect(minimalTree).to.be.a('function');
    });
    it('should take an array and return an object constructed by BinaryNode', function() {
      var tree = minimalTree([1]);
      expect(tree).to.be.a('object');
      expect(tree.val).to.equal(1);
      expect(tree.constructor).to.equal(BinaryNode);
    });
    it('should return a tree with the smallest depth possible', function() {
      for(var i = 0; i < 10; i++) {
        var length = Math.ceil(Math.random()*100);
        var expectedDepth = Math.ceil(Math.log2(length)) - 1;
        var arr = [], tree;

        for(var j = 0; j < length; j++) {
          arr.push(j);
        }

        tree = minimalTree(arr);

        expect(tree.depth()).to.equal(expectedDepth);
      }
    });
    it('should return null if passed an empty array', function(){
      expect(minimalTree([])).to.equal(null);
    });
  });

});
