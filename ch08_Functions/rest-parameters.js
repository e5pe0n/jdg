const max = (first = -Infinity, ...rest) => {
  let maxValue = first;
  for (const n of rest) {
    if (n > maxValue) maxValue = n;
  }
  return maxValue;
};

console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));
