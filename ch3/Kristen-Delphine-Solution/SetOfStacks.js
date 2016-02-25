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