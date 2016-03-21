
function balancedSubArray(arr, targetType, limitType, extras, largestSolution) {
    if(targetType === undefined) {
      var count = arr.reduce(function(memo, item) {
        memo[typeof item] += 1;
        return memo;
      },{number: 0, string: 0});
      if(count.number === count.string) {
        return arr.length;
      } else if(count.number < count.string) {
        targetType = 'string';
        limitType = 'number';
        extras = count.string - count.number;
      } else {
        targetType = 'number'
        limitType = 'string';
        extras = count.number - count.string;
      }
      largestSolution = 0;
    }
    if(arr.length === 1) return largestSolution;
    if(!extras || arr.length === 0) {
      return arr.length > largestSolution ? arr.length : largestSolution;
    } else {
      var back = arr.slice(1);
      var front = arr.slice(0, -1);
      if(typeof arr[0] === targetType) {
        largestSolution = balancedSubArray(back, targetType, limitType, extras-1, largestSolution);
      } else {
        largestSolution = balancedSubArray(back, targetType, limitType, extras+1, largestSolution);
      }

      if(typeof arr[arr.length-1] === targetType) {
        largestSolution = balancedSubArray(front, targetType, limitType, extras-1, largestSolution);
      } else {
        largestSolution = balancedSubArray(front, targetType, limitType, extras+1, largestSolution);
      }
    }
    return largestSolution;
}
