
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


function kthMultiple(k) {
  if(k === 0) return null;

  const primeSieve = [2,3,5,7];
  const multiSieve = [1,3,5,7];
  let i = 7;

  while (multiSieve.length < k) {
    i += 2;
    let isMultiple = true;
    let isPrime = primeSieve.reduce((pass, prime) => {
      let remain = i%prime;
      if (!remain && (prime !== 3 && prime !== 5 && prime !== 7)) isMultiple = false;
      return (pass && remain) ? true : false;
    }, true);

    if (isPrime) primeSieve.push(i);
    else if (isMultiple) multiSieve.push(i);
  }

  return multiSieve[k-1];
}

function count2s(n) {
  let num = 2;
  let count = 0;

  while (num <= n) {
    let str = num.toString();
    count = Array.prototype.reduce.call(str, (count, i) => (i === "2" ? count+1 : count), count);
    num++;
  }
  return count;
}
