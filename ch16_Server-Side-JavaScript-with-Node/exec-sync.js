const child_process = require("child_process");
const listing = child_process.execSync("ls -l ./*.js", { encoding: "utf8" });
console.log(listing);
// -rw-r--r-- 1 root root  259 Nov 18 10:24 ./argv.js
// -rw-r--r-- 1 root root  693 Nov 18 12:24 ./buffer.js
// -rw-r--r-- 1 root root  263 Nov 22 01:45 ./child-process.js
// ...
// -rw-r--r-- 1 root root  567 Nov 20 06:28 ./sha256-paused-mode.js
// -rw-r--r-- 1 root root  170 Nov 20 14:08 ./tcp-client.js
// -rw-r--r-- 1 root root 1469 Nov 20 14:05 ./tcp-server.js

const listing2 = child_process.execFileSync("ls", ["-l", "./"], {
  encoding: "utf-8",
});
console.log(listing2);
// total 108
// -rw-r--r-- 1 root root  259 Nov 18 10:24 argv.js
// -rw-r--r-- 1 root root  693 Nov 18 12:24 buffer.js
// -rw-r--r-- 1 root root  263 Nov 22 01:45 child-process.js
// ...
// -rw-r--r-- 1 root root  567 Nov 20 06:28 sha256-paused-mode.js
// -rw-r--r-- 1 root root  170 Nov 20 14:08 tcp-client.js
// -rw-r--r-- 1 root root 1469 Nov 20 14:05 tcp-server.js
