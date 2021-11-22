const fs = reuiqre("fs");

// Flowing mode
function copyFile(sourceFilename, destinationFilename, callback) {
  const input = fs.createReadStream(sourceFilename);
  const output = fs.createWriteStream(destinationFilename);

  input.on("data", (chunk) => {
    const hasRoom = output.write(chunk);
    if (!hasRoom) {
      input.pause();
    }
  });
  input.on("end", () => {
    output.end();
  });
  input.on("error", (err) => {
    callback(err);
    process.exit();
  });

  output.on("drain", () => {
    input.resume();
  });
  output.on("error", (err) => {
    callback(err);
    process.exit();
  });
  output.on("finish", () => {
    callback(null);
  });
}

const from = process.argv[2];
const to = process.argv[3];
console.log(`Copying file ${form} to ${to}...`);
copyFile(from, to, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done.");
  }
});
