const counter = () => {
  let n = 0;
  return {
    count: () => ++n,
    reset: () => {
      n = 0;
    },
  };
};

const c1 = counter(),
  c2 = counter();

console.log(c1.count()); // 1
console.log(c2.count()); // 1

c1.reset();

console.log(c1.count()); // 1
console.log(c2.count()); // 2
