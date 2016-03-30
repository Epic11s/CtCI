/*                 Maser Solution                           */


/*                  Individual Solutions                    */



//                  Bryan

function sortAnagrams(arr) {
  var signatures = {}, words = {};
  arr.forEach(function(word) {
    let sig = mergeSortStr(word);
    words[word] = sig;

    if(signatures[sig] === undefined) {
      signatures[sig] = 1;
    } else {
      signatures[sig]++;
    }
  });

  return arr.reduce(function(lists, word) {
      let sig = words[word];
      if(signatures[sig] > 1) {
        lists[0].push(word);
      } else {
        lists[1].push(word);
      }
      return memo;
    },
    [[], []]).reduce(function(memo, list) {
      return memo.concat(list);
    }, []);
}

function mergeSortStr(str) {
  let result = '';
  const len = str.length;

  if(len === 1) {
    return str;
  }
  const mid = len/2;
  const left = mergeSortStr(str.slice(0, mid));
  const right = mergeSortStr(str.slice(mid));
  let cLeft = 0, cRight = 0;
  // using cursors to avoid O(n^2) w/ O(n) native methods
  while(result.length < len) {
    if(cLeft === left.length) result += right.slice(cRight);
    else if(cRight === right.length) result += left.slice(cLeft);
    else if(left[cLeft] < right[cRight]) {
      result += left[cLeft];
      cLeft++;
    } else if(right[cRight] < left[cLeft]) {
      result += right[cRight];
      cRight++;
    }
  }

  return result;
}
