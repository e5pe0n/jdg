const a = [1, 2, 3, 4, 5, 6, 7, 8];
const x = a.splice(4);
console.log(`x=${x}, a=${a}`); // x=5,6,7,8, a=1,2,3,4
const y = a.splice(1, 2);
console.log(`y=${x}, a=${a}`); // y=5,6,7,8, a=1,4
const z = a.splice(1, 1);
console.log(`z=${z}, a=${a}`); // z=4, a=1
