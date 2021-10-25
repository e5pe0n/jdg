const counter = (n) => ({
  get count() {
    return ++n;
  },
  set count(m) {
    if (m > n) n = m;
    else throw Error("count can only be set to a larger value");
  },
});

const c = counter(1000);

console.log(c.count); // 1001
console.log(c.count); // 1002
c.count = 2000;
console.log(c.count); // 2001
c.count = 2000; // Error: count can only be set to a larger value
