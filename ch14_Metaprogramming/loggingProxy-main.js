const { loggingProxy } = require("./loggingProxy");

const data = [10, 20];
const methods = { square: (x) => x * x };

const proxyData = loggingProxy(data, "data");
const proxyMethods = loggingProxy(methods, "methods");

console.log(data.map(methods.square)); // [ 100, 400 ]
console.log();

console.log(proxyData.map(methods.square));
console.log();
// Handler get(data, map)
// Handler get(data, length)
// Handler get(data, constructor)
// Handler has(data, 0)
// Handler get(data, 0)
// Handler has(data, 1)
// Handler get(data, 1)
// [ 100, 400 ]

console.log(data.map(proxyMethods.square));
console.log();
// Handler get(methods, square)
// Handler methods.square(10,0,10,20)
// Handler methods.square(20,1,10,20)
// [ 100, 400 ]

for (const x of proxyData) {
  console.log("Datum", x);
}

// Handler get(data, Symbol(Symbol.iterator))
// Handler get(data, length)
// Handler get(data, 0)
// Datum 10
// Handler get(data, length)
// Handler get(data, 1)
// Datum 20
// Handler get(data, length)
