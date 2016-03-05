//Question 3.5


function sortStack(stack) {

}



/*******************

STACK CONSTRUCTOR AND METHODS

*******************/



var Stack = function(){
  this._storage = [];
  this.length = 0;
};

Stack.prototype.push = function(value){
  this._storage.push(value);
  this.length++;
};

Stack.prototype.pop = function(){
  if (this.length >= 1) { this.length-- };
  return this._storage.pop();
};

Stack.prototype.peek = function(){
  return this._storage[this._storage.length - 1];
};

Stack.prototype.isEmpty = function(){
  return this._storage.length === 0;
};


/*******************/