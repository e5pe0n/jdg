const { Range } = require("./Range");

function filter(iterable, predicate) {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        const v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}

const a = [...filter(new Range(1, 10), (x) => x % 2 === 0)];
console.log(a); // [ 2, 4, 6, 8, 10 ]
