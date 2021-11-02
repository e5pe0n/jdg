const o = {
  x: 1,
  y: 2,
  z: 3,
  *g() {
    for (const key of Object.keys(this)) {
      yield key;
    }
  },
};

const a = [...o.g()];
console.log(a); // [ 'x', 'y', 'z', 'g' ]
