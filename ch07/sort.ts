const a = [33, 4, 1111, 222];
a.sort(); // [ 1111, 222, 33, 4 ]
console.log(a);

a.sort((a, b) => a - b); // [ 4, 33, 222, 1111 ]
console.log(a);

a.sort((a, b) => b - a); // [ 1111, 222, 33, 4 ]
console.log(a);

console.log();

const ss = ["ant", "Bug", "cat", "Dog"];
ss.sort(); // [ 'Bug', 'Dog', 'ant', 'cat' ]
console.log(ss);

ss.sort((s: string, t: string) => {
  const a = s.toLowerCase();
  const b = t.toLowerCase();

  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}); // [ 'ant', 'Bug', 'cat', 'Dog' ]
console.log(ss);
