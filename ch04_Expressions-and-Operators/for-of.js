const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (const element of data) {
  sum += element;
}
console.log(sum); // 45

const o = { x: 1, y: 2, z: 3 };
for (const k of Object.keys(o)) {
  console.log(k);
}

for (const v of Object.values(o)) {
  console.log(v);
}

for (const [k, v] of Object.entries(o)) {
  console.log(k, v);
}

const m = new Map([
  [0, "one"],
  [1, "two"],
  [2, "three"],
]);
for (const [k, v] of m) {
  console.log(k, v); // 0 "one", 2 "two", 3 "three"
}
