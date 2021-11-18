const fs = require("fs");

function readConfigFile(path, callback) {
  fs.readFile(path, "utf8", (err, text) => {
    if (err) {
      console.error(err);
      callback(null);
      return;
    }
    const data = null;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error(err);
    }
    callback(data);
  });
}
