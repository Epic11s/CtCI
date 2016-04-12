/*                 Maser Solution                           */


/*                  Individual Solutions                    */

//          Bryan

function count2s(n) {
  let num = 2;
  let count = 0;

  while (num <= n) {
    let str = num.toString();
    count = Array.prototype.reduce.apply(str, (count, i) => (i === "2" ? count+1 : count), count);
  }
  return count;
}
