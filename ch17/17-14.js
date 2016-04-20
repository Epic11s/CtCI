/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//          Bryan
function smallestK(array, targetNum) {
  return array.reduce(function(result, val) {
    if (result.length < targetNum) {
      result.push(val);
    } else {
      for (var i = result.length-1; i >= 0; i--) {
        if (val <= result[i]) {
          if ((i > 0 && val >= result[i-1]) || i === 0) {
            result.splice(i,0,val);
            result.pop();
            break;
          } else if (val > result[i]) {
            break;
          }
        }
      }
    }
    return result;
  }, []);
}
