function* smallNumbers() {
  console.log("#0");
  const y1 = yield 1;
  console.log("#1", y1);
  const y2 = yield 2;
  console.log("#2", y2);
  const y3 = yield 3;
  console.log("#3", y3);
  return 4;
}

const g = smallNumbers();
const n1 = g.next("a");
console.log("@1", n1.value);
const n2 = g.next("b");
console.log("@2", n2.value);
const n3 = g.next("c");
console.log("@3", n3.value);
const n4 = g.next("d");
console.log("@4", n4.value);
