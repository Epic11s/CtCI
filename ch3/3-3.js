/*----------  Jefri  ----------*/
var SetOfStacks = function(max) {
  this.max = max;
  this.storage = [];
};

SetOfStacks.prototype.push = function(val) {

  if (this.size() === 0) {
    this.storage.push(new SetOfStacks());
  }
  // get the current stack
  var index = this.size();
  var stack = this.storage[index - 1];

  // if the stack size is greater or equal to 3, create new instance of stack
  if (stack.size() >= this.max) {
    this.storage.push(new SetOfStacks());
    stack = this.storage[index];
    stack.storage[stack.size()] = val;
  } else {
    stack.storage[stack.size()] = val;
  }

};

SetOfStacks.prototype.pop = function() {
  var index = this.size();
  var stack = this.storage[index - 1];

  if (stack.size() === 1) {
    return this.storage.pop();
  } else {
    return stack.storage.pop();
  }

};

SetOfStacks.prototype.size = function() {
  return this.storage.length;
};

// tests //
// var temp = new SetOfStacks(3);
// temp.push(1);
// temp.push(2);
// temp.push(3);
// temp.push(4);
// temp.push(5);
// temp.push(6);



// console.log(JSON.stringify(temp));


/*----------  Kristen & Delphine  ----------*/

var SetOfStacks = function(n) {
  var _storage = [];
  this.push = function(value) {
    var innerStack = _storage[_storage.length - 1];
    if (!_storage.length) {
      _storage.push( [] );
      _storage[0].push(value);
    } else if (innerStack.length < n) {
      innerStack.push(value);
    } else {
      _storage.push( [] );
      _storage[_storage.length - 1].push(value);
    }
  }

  this.pop = function() {

    if(!_storage.length){
      return undefined;
    } else {
      var innerStack = _storage[_storage.length - 1];
      var poppedItem = innerStack.pop();
      if(innerStack.length === 0) {
        _storage.pop();
      }
      return poppedItem;
    }
  }

  this.size = function() {
    return _storage.length;
  }

}