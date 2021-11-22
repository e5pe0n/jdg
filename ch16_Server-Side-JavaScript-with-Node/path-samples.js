const os = require("os");

console.log(process.cwd()); // absolute path of the current directory
console.log(__filename); // absolute path of the file
console.log(__dirname); // absolute path of the directory containing the file
console.log(os.homedir()); // absolute path of user's home directory
console.log();

const path = require("path");

console.log("parent_dir" + path.sep + "child_dir"); // parent_dir/child_dir
console.log();

const p = "src/pkg/test.js";
console.log(path.basename(p)); // test.js
console.log(path.extname(p)); // .js
console.log(path.dirname(p)); // src/pkg
console.log(path.basename(path.dirname(p))); // pkg
console.log(path.dirname(path.dirname(p))); // src
console.log();

console.log(path.normalize("a/b/c/../c/")); // a/b/c/
console.log(path.normalize("a/./b")); // a/b
console.log(path.normalize("//a//b//")); // /a/b/
console.log();

console.log(path.join("src", "pkg", "t.js")); // src/pkg/t.js
console.log();

console.log(path.resolve()); // equivalent to process.cwd()
console.log(path.resolve("t.js")); // path.join(process.cwd(), t.js)
console.log(path.resolve("/tmp", "t.js")); // /tmp/t.js
console.log(path.resolve("/a", "/b", "t.js")); // /b/t.js
