const bytes = new Uint8Array(12);
const pattern = new Uint8Array([0, 1, 2, 3]);

bytes.set(pattern);
console.log(bytes.slice(0, 12));
// Uint8Array(12) [0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0]

bytes.set(pattern, 4);
console.log(bytes.slice(0, 12));
// Uint8Array(12) [0, 1, 2, 3, 0, 1, 2, 3, 0, 0, 0, 0]

bytes.set([0, 1, 2, 3], 8);
console.log(bytes.slice(0, 12));
// Uint8Array(12) [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3]

const last3 = bytes.subarray(bytes.length - 3, bytes.length);
console.log(last3); // Uint8Array(3) [ 1, 2, 3 ]
