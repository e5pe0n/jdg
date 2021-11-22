const fs = require("fs");

const stats = fs.statSync("./argv.js");
console.log(stats.isFile()); // true
console.log(stats.isDirectory()); // false
console.log(stats.size); // 259
console.log(stats.atime); // 2021-11-18T13:13:22.483Z ; last access
console.log(stats.mtime); // 2021-11-18T10:24:51.191Z ; last modified
console.log(stats.uid); // 0
console.log(stats.gid); // 0
console.log(stats.mode.toString(8)); // 100644 ; file permission as an octal
