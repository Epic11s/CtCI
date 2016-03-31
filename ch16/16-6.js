/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//       Bryan
function smallestDiff(arr1, arr2) {
  const sorted1 = mergeSort(arr1);
  const sorted2 = mergeSort(arr2);
  const highest = sorted1[0] > sorted2[0] ? sorted1 : sorted2;
  const lowest = sorted1[0] < sorted2[0] ? sorted1 : sorted2;
  const len = highest.length;
  let cursor = 0;

  return lowest.reduce(function(diff, val) {
    let newDiff;

    while(cursor < len && highest[cursor] < val) {
      newDiff = Math.abs(val - highest[cursor]);
      if(diff > newDiff) diff = newDiff;
      cursor++;
    }

    newDiff = Math.abs(val - highest[cursor]);
    if(diff > newDiff) diff = newDiff;

    return diff
  }, Infinity);
}

function mergeSort(arr) {
  if(arr.length === 1)  return arr;

  const len = arr.length;
  const mid = Math.floor(arr.length / 2);
  const front = mergeSort(arr.slice(0, mid));
  const back = mergeSort(arr.slice(mid));
  let cursorF = 0; cursorB = 0;
  let result = [];

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
