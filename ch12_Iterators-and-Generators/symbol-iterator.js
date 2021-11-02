const iterable = [99, 100, 101];
const iterator = iterable[Symbol.iterator]();
for (let res = iterator.next(); !res.done; res = iterator.next()) {
  console.log(res.value); // 99, 100, 101
}

const list = [1, 2, 3, 4, 5];
const iter = list[Symbol.iterator]();
const head = iter.next().value;
const tail = [...iter];
console.log(tail); // [ 2, 3, 4, 5 ]
