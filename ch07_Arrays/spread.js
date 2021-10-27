const letters = [..."hello world"];
const rem_dups = [...new Set(letters)];
console.log(rem_dups); // ['h', 'e', 'l','o', ' ', 'w', 'r', 'd']
