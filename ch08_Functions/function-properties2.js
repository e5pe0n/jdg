const factorial = (n) => {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) {
      factorial[n] = n * factorial(n - 1);
    }
    return factorial[n];
  } else {
    return NaN;
  }
};

factorial[1] = 1; // initialize factorial function

console.log(factorial(6)); // 720
console.log(factorial[5]); // 120; cached value
