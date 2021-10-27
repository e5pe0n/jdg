const a = [1, 2, 3, 4, 5];
const b = a.slice(-4, -1);
console.log(`a=${a}, b=${b}`); // a=1,2,3,4,5, b=2,3,4
b[0] = 100;
console.log(`a=${a}, b=${b}`); // a=1,2,3,4,5, b=100,3,4
