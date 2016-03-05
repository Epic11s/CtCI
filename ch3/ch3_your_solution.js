//Question 3.5


function sortStack(stackA) {
  var stackB = new Stack();
  var length = 0;
  var biggest;
  var counter = 1;

  //push items from stack A to stack B and increment length to see what length is
  while (!stackA.isEmpty()) {
    stackB.push(stackA.pop());
    length++;
  }
  //put them back
  while (!stackB.isEmpty()) {
    stackA.push(stackB.pop());
  }

  var singleSort = function() {
    var temp;
    //if we've gone through all items in the stack, return
    if (length === 0) return;

    for (var i = 0; i < counter; i++) {
      stackB.push(stackA.pop());
      counter--;
    }

    //set temp to 'n-th' item
    temp = stackA.pop();

    while(!stackA.isEmpty()) {
      //if next is smaller than temp
      if(stackA.peek() < temp) {
        //push next to B
        stackB.push(stackA.pop());
      } else {
        if (stackB.isEmpty() && stackA.peek() > temp) {
          counter++;
        }
        stackB.push(temp);
        temp = null;
        while(!stackA.isEmpty()) {
          stackB.push(stackA.pop());
        }
      }
    }
    //if stackA is empty and temp has not been pushed to B
    if(temp !== null) {
      //push temp to B
      stackB.push(temp);
    }
    //put all items back in stackA
    while(!stackB.isEmpty()) {
      stackA.push(stackB.pop());
    }
    //decrement length
    length--;
    //call singleSort
    singleSort();
  }
  singleSort(0);
  return stackA;
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