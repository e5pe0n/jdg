const fs = require("fs");

// An asynchronous but nonstreaming (and therefore inefficinet) function
// - it must allocate enough memory to hold the entire contents of the file in memory
// - it cannot start writing new file until it has finished reading the old file
function copyFile(sourceFilename, destinationFilename, callback) {
  fs.readFile(sourceFilename, (err, buffer) => {
    if (err) {
      callback(err);
    } else {
      fs.writeFile(destinationFilename, buffer, callback);
    }
  });
}
