let n = 123456.789;

console.log(n.toFixed(0)); // "123457"
console.log(n.toFixed(2)); // "123456.79"
console.log(n.toFixed(5)); // "123456.78900"

console.log(n.toExponential(1)); // "1.2e+5"
console.log(n.toExponential(3)); // "1.235e+5"

console.log(n.toPrecision(4)); // "1.235e+5"
console.log(n.toPrecision(7)); // "123456.8"
console.log(n.toPrecision(10)); // "123456.7890"
