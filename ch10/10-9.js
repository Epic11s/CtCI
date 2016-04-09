/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//       Bryan

function sortedMatrixSearch(matrix, target) {
  const result = [];
  let container;
  let possible = matrix.map((v, i) => i);

  while (possible.length && container === undefined) {
    let pMid = Math.floor(possible.length / 2);
    let midIndex = possible[pMid];
    let midRow = matrix[midIndex];

    if (target >= midRow[0] && target <= midRow[midRow.length-1]) {
      container = midRow;
      result.push(midIndex);
    } else if (target > midRow[midRow.length-1]) {
      possible = possible.length > 1 ? possible.slice(pMid+1) : [];
    } else {
      possible = possible.slice(0, pMid);
    }
  }

  possible = container ? container.map((v, i) => i) : [];

  while (possible.length && result.length !== 2) {
    let pMid = Math.floor(possible.length / 2);
    let midIndex = possible[pMid];
    let midVal = container[midIndex];

    if(midVal === target) {
      result.push(midIndex);
    } else  if (target > midVal) {
      possible = possible.length > 1 ? possible.slice(pMid+1) : [];
    } else {
      possible = possible.slice(0, pMid);
    }
  }

  return result;
}
