/*
         17.10 String Rotation Master Solution
*/

/*
          Individuals
*/
    // Bryan

function findMajority(arr) {
  var ele = arr[0], count = 1, not = 0;
  for(var i = 1; i < arr.length; i++) {
    if(ele === arr[i]) count++;
    else not++;
    if(count <= not) {
      ele = arr[i+1];
      count = 1;
      not = 0;
      i++;
    }
  }
  count = 0; not = 0;
  arr.forEach(function(item) {
    if(ele === item) count++;
    else not++;
  });

  return count > not ? ele : -1;
}
