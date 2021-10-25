function memoize(f) {
  const cache = new Map();

  return function (...args) {
    const key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const res = f.apply(this, args);
      cache.set(key, res);
      return res;
    }
  };
}

// recursive functions share the map object
const factorial = memoize(function (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});

console.log(factorial(5)); // 120
