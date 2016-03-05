/*
              Master Solution
*/







/*
            Individuals
*/

//    Bryan

var Stack = function() {
 this.storage = {};
 this.top = -1;
}

Stack.prototype.push = function(val){
  this.top++;
  this.storage[this.top] = val;
}

Stack.prototype.pop = function(){
  var temp = null;
  if(this.top >= 0){
  	temp = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
	}
  return temp;
}

Stack.prototype.peek = function(){
  return this.storage[this.top];
}

Stack.prototype.isEmpty = function(){
  return this.top === -1;
}
Stack.prototype.length = function(){
  return this.top+1;
}

//define sortStack
const sortStack = (original) => {
  //create temporary stack
  var temp = new Stack();
  //loop through swap logic while original stack is not empty
  while( !original.isEmpty() ){
    //pop out top item from original
    var newVal = original.pop();
    //create counter
    var count = 1;
    //as long as the temp is not empty and new value is smaller than top value
    while(!temp.isEmpty() && newVal < temp.peek()){
      //move the top value from temp to original
      original.push( temp.pop() );
      //increment a count of pieces moved
      count++;
    }
    //place new value in temp stack
    temp.push(newVal);
    //move all pieces back from original to temp
    while(--count){
      temp.push( original.pop() )
    }
  }
  //loop through temporary and move each item to original stack
  while( !temp.isEmpty() ){
    original.push( temp.pop() );
  }
  //return original stack
  return original;
}


// Delphine

function sortStack(stackA) {
  var stackB = new Stack();
  var length = 0;
  var biggest;
  var counter = 1;

  //figure out length of stack
  while (!stackA.isEmpty()) {
    stackB.push(stackA.pop());
    length++;
  }
  while (!stackB.isEmpty()) {
    stackA.push(stackB.pop());
  }

  function singleSort() {
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
