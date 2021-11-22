const fs = require("fs");
const crypto = require("crypto");

function sha256(filename, callback) {
  const input = fs.createReadStream(filename);
  const hasher = crypto.createHash("sha256");

  input.on("readable", () => {
    let chunk;
    while ((chunk = input.read())) {
      hasher.update(chunk);
    }
  });
  input.on("end", () => {
    const hash = hasher.digest("hex");
    callback(null, hash);
  });
  input.on("error", callback);
}

sha256(process.argv[2], (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
});
