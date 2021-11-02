function* sequence(...iterables) {
  for (const iterable of iterables) {
    for (const item of iterable) {
      yield item;
    }
  }
}

function* sequence2(...iterables) {
  // equivalent to sequence() above
  for (const iterable of iterables) {
    yield* iterable;
  }
}

const a = [...sequence2([1, 2, 3], ["a", "b"], [100])];
console.log(a); // [ 1, 2, 3, 'a', 'b', 100 ]
