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