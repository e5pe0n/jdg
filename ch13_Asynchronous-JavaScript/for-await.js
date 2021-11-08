const fs = require("fs");

async function parseFile(filename) {
  const stream = fs.createReadStream(filename, { encoding: "utf-8" });
  for await (const chunk of stream) {
    parseChunk(chunk);
  }
}
