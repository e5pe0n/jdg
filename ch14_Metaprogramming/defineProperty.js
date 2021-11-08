"use strict";
const o = {};

Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log(o.x); // 1
console.log(Object.keys(o)); // []

Object.defineProperty(o, "x", { writable: false });
try {
  o.x = 2;
} catch (err) {
  console.log(err);
  // TypeError: Cannot assign to read only property 'x' of object '#<Object>'
}
console.log(o.x); // 1

Object.defineProperty(o, "x", { value: 2 });
console.log(o.x); // 2

// change x from a data property to accessor property
Object.defineProperty(o, "x", {
  get: function () {
    return 0;
  },
});
console.log(Object.getOwnPropertyDescriptor(o, "x"));
// {
//   get: [Function: get],
//   set: undefined,
//   enumerable: false,
//   configurable: true
// }
