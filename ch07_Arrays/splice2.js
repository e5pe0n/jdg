const a = [1, 2, 3, 4, 5];
a.splice(2, 0, 100, 200);
console.log(a); // [1, 2, 100, 200, 3, 4, 5]
a.splice(2, 2, [1, 2], 3);
console.log(a); // [ 1, 2, [ 1, 2 ], 3, 3, 4, 5 ]
a.splice(a.length, 0, ...[300, 400]);
console.log(a); // [ 1, 2, [ 1, 2 ], 3, 3, 4, 5, 300, 400 ]
