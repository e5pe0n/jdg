const util = require("util");
const fs = require("fs");
const pfs = {
  readFile: util.promisify(fs.readFile),
};

// handmade promise versions
function promiseRaadConfigFile(path) {
  return pfs.readFile(path, "utf-8").then((text) => {
    return JSON.parse(text);
  });
}

async function asyncReadConfigFile(path) {
  const text = await pfs.readFile(path, "utf-8");
  return JSON.parse(text);
}

// using predefined
function promiseReadConfigFile2(path) {
  return fs.promises.readFile(path, "utf-8").then((text) => {
    return JSON.parse(text);
  });
}
