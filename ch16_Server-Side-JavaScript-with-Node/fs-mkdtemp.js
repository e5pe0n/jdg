const os = require("os");
const fs = require("fs");
const path = require("path");

let tempDirPath;
try {
  tempDirPath = fs.mkdtempSync(path.join(os.tmpdir(), "d-"));
  console.log(tempDirPath); // /tmp/d-til3mB
  // do something
} finally {
  fs.rmdirSync(tempDirPath);
}
