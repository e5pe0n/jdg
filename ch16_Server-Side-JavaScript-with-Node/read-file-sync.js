const fs = require("fs");

function readConfigFileSync(path) {
  const text = fs.readFileSync(path, "utf-8");
  return JSON.parse(text);
}
