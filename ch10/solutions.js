/* //Delphine's solution: 10.11 Peaks and Valleys

function peaksAndValleys(arr){

  function swap(idxOne, idxTwo) {
    var temp = arr[idxOne];
    arr[idxOne] = arr[idxTwo];
    arr[idxTwo] = temp;
  }

  if (arr.length <= 2) return arr;
  //loop through items in array, starting at index i and incrementing by 2
  for (var i = 1; i < arr.length; i += 2) {
    var left = arr[i-1],
        right = arr[i+1],
        current = arr[i];
    //if the num to left is bigger and num to right is smaller than current
    if ((left > current && current > right) || (i === arr.length - 1 && left > current)) {
      //swap with left
      swap(i, i-1);
    //else if num to right is bigger and num to left is smaller
    } else if (arr[i - 1] < current && current < right) {
      //swap with right
      swap(i, i+1);
      //if item is smaller than both left and right,
    } else if (current < left && current < right) {
      //swap item with bigger of the two
      if (left > right) {
        swap(i, i-1);
      } else {
        swap(i, i+1);
      }
    }
  }
  return arr;
}

*/