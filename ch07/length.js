const a = [1, 2, 3, 4, 5];
a.length = 3;
console.log(a); // [ 1, 2, 3 ]
a.length = 0;
console.log(a); // []
a.length = 5;
console.log(a); // [ <5 empty items> ]
