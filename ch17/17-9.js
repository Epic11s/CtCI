/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//     Bryan

function kthMultiple(k) {


}


function primeSieve(n) {
  const sqrtN = Math.sqrt(n);
  const list = [false, false];
  for (let i = 2; i <= n; i++) {
    list[i] = true;
  }


  for(let num = 2; num <= sqrtN; num++) {
    let mult = num*num;
    while(mult <= n) {
      list[mult] = false;
      mult += num;
    }
  }

  return list.filter((isPrime) => isPrime);
}
