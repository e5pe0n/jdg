function f(y) {
  return this.x + y;
}
const o = { x: 1 };
const g = f.bind(o); // bind f to o
console.log(g(2)); // 3; equivalent to o.f(2)

const p = { x: 10, g };
console.log(p.g(2)); // 3; g is still bound to o

const sum = (x, y) => x + y;
const succ = sum.bind(null, 1);
console.log(succ(2)); // 3
