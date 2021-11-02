const seq = function* (from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
};

const a = [...seq(3, 5)];
console.log(a); // [ 3, 4, 5 ]
