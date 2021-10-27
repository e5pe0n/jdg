const point = { x: 1, y: 1 };
console.log("x" in point); // true
console.log("z" in point); // false
console.log("toString" in point); // true

const data = [7, 8, 9];
console.log("0" in data); // true
console.log(1 in data); // true
console.log(3 in data); // false
