function* zip(...iterables) {
  const iterators = iterables.map((i) => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    if (index >= iterators.length) {
      index = 0;
    }
    const item = iterators[index].next();
    if (item.done) {
      iterators.splice(index, 1);
    } else {
      yield item.value;
      index++;
    }
  }
}

const a = [...zip([1, 2, 3], ["a", "b"], [100])];
console.log(a); // [ 1, 'a', 100, 2, 'b', 3 ]
