//Hera's solution I

  var pivot = arr[Math.floor((left + right)/2)];
  while (left <= right) {
    while(arr[left] < pivot) {left++};
    while(arr[right] > pivot) {right--};
    if (left <= right) { 
        var temp1 = arr[left];
        var temp2 = arr[right];
        arr[left] = temp2;
        arr[right] = temp1;
        left++;
        right--;
    }
  };
  return left;
};
var quickSort = function(arr, left, right) {
  var index = partition(arr, left, right);
  if (left < (index - 1)) {
    quickSort(arr, left, (index - 1));
  }
  if (index < right) {
    quickSort(arr, index, right);
  }
};

var peaksAndValleys = function(arr) {
//quicksort arr;
var left = 0;
var right = arr.length - 1;
var mid = (arr.length - 1)/2;
quickSort(arr, left, right);

//split sorted arr in two
var valleys = arr.slice(0, mid);
var peaks = arr.slice(mid).reverse();

var longest = Math.max(valleys.length, peaks.length);
//iterate through both
var results = [];
for ( var i = 0; i < longest; i++) {
  if (peaks[i]) { results.push(peaks[i]); }
  if (valleys[i]) { results.push(valleys[i]); }
}
  //interlace elements together
return results;
}