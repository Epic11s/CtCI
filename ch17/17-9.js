/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//     Bryan

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
