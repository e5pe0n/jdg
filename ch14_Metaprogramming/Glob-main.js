const { Glob } = require("./Glob");

const pattern = new Glob("docs/*.txt");

console.log("docs/sample.txt".search(pattern)); // 0
console.log("docs/sample.htlm".search(pattern)); // -1

const m = "docs/sample.txt".match(pattern);
console.log(m[0]); // docs/sample.txt
console.log(m[1]); // sample
console.log(m.index); // 0

console.log("docs/sample.txt".replace(pattern, "web/$1.html")); // web/sample.html
