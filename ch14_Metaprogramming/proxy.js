function readOnlyProxy(o) {
  function readonly() {
    throw new TypeError("Readonly");
  }
  return new Proxy(o, {
    set: readonly,
    defineProperty: readonly,
    deleteProperty: readonly,
    setPrototypeOf: readonly,
  });
}

const o = { x: 1, y: 2 };
const p = readOnlyProxy(o);
console.log(p.x); // 1
try {
  p.x = 2;
} catch (err) {
  console.log(err); // TypeError: Readonly
}
try {
  delete p.y;
} catch (err) {
  console.log(err); // TypeError: Readonly
}
try {
  p.z = 3;
} catch (err) {
  console.log(err); // TypeError: Readonly
}
