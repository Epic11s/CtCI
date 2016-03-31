


//             Bryan
function mergeSort(arr) {
  if(arr.length === 1)  return arr;

  const len = arr.length;
  const mid = Math.floor(arr.length / 2);
  var front = mergeSort(arr.slice(0, mid));
  var back = mergeSort(arr.slice(mid));
  var cursorF = 0; cursorB = 0;
  var result = [];

  while(result.length < len) {
    if(cursorF === front.length) result = result.concat(back.slice(cursorB));
    else if(cursorB === back.length) result = result.concat(front.slice(cursorF));
    else if(front[cursorF] < back[cursorB]) {
      result.push(front[cursorF]);
      cursorF++;
    }
    else {
      result.push(back[cursorB]);
      cursorB++;
    }
  }

  return result;
}
