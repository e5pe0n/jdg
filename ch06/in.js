const o = { x: 1 };
console.log("x" in o); // true
console.log("y" in o); // false
console.log("toString" in o); // true

console.log();

console.log(o.hasOwnProperty("x")); // true
console.log(o.hasOwnProperty("y")); // false
console.log(o.hasOwnProperty("toString")); // false

console.log();

console.log(o.propertyIsEnumerable("x")); // true
console.log(o.propertyIsEnumerable("toString")); // false
console.log(Object.prototype.propertyIsEnumerable("toString")); // false

console.log();

console.log(o.x !== undefined); // true
console.log(o.y !== undefined); // false
console.log(o.toString !== undefined); // true
