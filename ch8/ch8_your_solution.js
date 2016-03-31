function recursiveMultiply(a, b, sum) {
  const multiplier = a <= b ? a : b;
  const multiplicand = a >= b ? a : b;
  sum = sum || 0;

  if(multiplier === 0) {
    return sum;
  } else {
    sum += multiplicand
    return recursiveMultiply(multiplier-1, multiplicand, sum);
  }
}
