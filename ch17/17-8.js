/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//         Bryan
function circusTower(people, tower, p, best, sorted) {
  if (!sorted) {
    if (!people.length) return [];
    people = heightMergeSort(people);
  }
  tower =  tower || [];
  best = best || [];

  if (p = people.length) {
    if (tower.length > best.length) best = tower.slice();
    return best;
  }

  for (let i = p || 0; i <= people.length; i++) {
    let tLen = tower.length;
    let added = false;
    if (!tLen) {
      tower.push(people[i]);
      added = true;
    } else if (people[i][0] > tower[tLen-1][0] && people[i][1] > tower[tLen][1]) {
      tower.push(people[i]);
      added = true;
    }
    if (added) {
      best = circusTower(people, tower, i+1, best, true);
      tower.splice(tLen+1, 1);
    }
  }

  return best;
}

function heightMergeSort(people) {
  const pLen= people.length;
  if (pLen <= 1) {
    return people;
  }
  const mid = Math.floor(pLen/ 2);
  const left = heightMergeSort(people.slice(0, mid));
  const right = heightMergeSort(people.slice(mid));
  let merge = [];
  let cLeft = 0, cRight = 0;
  console.log(left, right);
  while (merge.length < pLen) {
    if (cLeft === left.length)    merge = merge.concat(right.slice(cRight));
    else if (cRight === right.length)  merge = merge.concat(left.slice(cLeft));
    else if (left[cLeft][0] < right[cRight][0]) {
      merge.push(left[cLeft]);
      cLeft++;
    } else {
      merge.push(right[cRight]);
      cRight++;
    }
  }
  return merge;
}
