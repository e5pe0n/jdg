const { Range } = require("./Range");

function map(iterable, f) {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const v = iterator.next();
      if (v.done) {
        return v;
      } else {
        return { value: f(v.value) };
      }
    },
  };
}

const a = [...map(new Range(1, 4), (x) => x * x)];
console.log(a); // [ 1, 4, 9, 16 ]
