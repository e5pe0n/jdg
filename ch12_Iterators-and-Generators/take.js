function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

function* take(n, iterable) {
  const it = iterable[Symbol.iterator]();
  while (n-- > 0) {
    const next = it.next();
    if (next.done) {
      return;
    } else {
      yield next.value;
    }
  }
}

const head_5 = [...take(5, fibonacciSequence())];
console.log(head_5); // [ 1, 1, 2, 3, 5 ]
