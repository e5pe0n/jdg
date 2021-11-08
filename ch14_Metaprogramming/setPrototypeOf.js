const o = { x: 1 };
const p = { y: 2 };
console.log(Object.getPrototypeOf(o)); // [Object: null prototype] {}

Object.setPrototypeOf(o, p);
console.log(o.y); // 2

const a = [1, 2, 3];
Object.setPrototypeOf(a, p);
console.log(a.join); // undefined
