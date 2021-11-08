const o = Object.getOwnPropertyDescriptor({ x: 1 }, "x");
console.log(o); // { value: 1, writable: true, enumerable: true, configurable: true }

const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
};

console.log(Object.getOwnPropertyDescriptor(random, "octet"));
// {
//   get: [Function: get octet],
//   set: undefined,
//   enumerable: true,
//   configurable: true
// }

console.log(Object.getOwnPropertyDescriptor({}, "x")); // undefined
console.log(Object.getOwnPropertyDescriptor({}, "toString")); // undefined
