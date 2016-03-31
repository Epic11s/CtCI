/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//       Bryan
function smallestDiff(arr1, arr2) {

}
function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var front = mergeSort(arr.slice(0, mid));
  var back = mergeSort(arr.slice(mid));
  var cursorF = 0; cursorB = 0;
  var result = [];

  while(result.length < arr.length) {
    if(cursorF === front.length) result.concat(back);
    if(cursorB === back.length) result.concat(front);
    if(front[cursorF] < back[cursorB]) result.push(front[cursorF]);
    else result.push(back[cursorB]);
  }

  return result;
}
