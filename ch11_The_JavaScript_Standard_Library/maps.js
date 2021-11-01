const m = new Map([
  ["one", 1],
  ["two", 2],
]);

for (const [key, value] of m) {
  console.log(`${key}: ${value}`);
}
// one: 1
// two: 2

const arr = [...m]; // [["one", 1], ["two", 2]]
