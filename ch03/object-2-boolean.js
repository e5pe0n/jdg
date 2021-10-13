const x = Boolean(false);
if (x) console.log("true");
else console.log("false"); // false

const y = new Boolean(false);
console.log(y == false); // true
if (y) console.log("true");
else console.log("false"); // true!
