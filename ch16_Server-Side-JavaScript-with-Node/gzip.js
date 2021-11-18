const fs = require("fs");
const zlib = require("zlib");

function gzip(filename, callback) {
  const source = fs.createReadStream(filename);
  const destination = fs.createWriteStream(filename + ".gz");
  const gzipper = zlib.createGzip();

  source
    .on("error", callback)
    .pipe(gzipper)
    .pipe(destination)
    .on("error", callback)
    .on("finish", callback);
}
