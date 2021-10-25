const timed = (f) => {
  return (...args) => {
    console.log(`Entering function ${f.name}`);
    const startTime = Date.now();
    try {
      return f(...args);
    } finally {
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
    }
  };
};

const benchmark = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; ++i) sum += i;
  return sum;
};

console.log(timed(benchmark)(1_000_000));
// Entering function benchmark
// Exiting benchmark after 3ms
// 500000500000
