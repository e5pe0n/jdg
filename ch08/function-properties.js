const uniqueInteger = () => uniqueInteger.counter++;
uniqueInteger.counter = 0;

console.log(uniqueInteger()); // 0
console.log(uniqueInteger()); // 1
