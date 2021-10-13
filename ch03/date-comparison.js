d1 = new Date(2021, 10, 5, 20, 32, 10);
d2 = new Date(2021, 10, 5, 20, 32, 11);
console.log(d1 < d2); // true; `>` operator converts Date objects to numbers (timestamp)
