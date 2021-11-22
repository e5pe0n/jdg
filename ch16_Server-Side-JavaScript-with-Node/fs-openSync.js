const fs = require("fs");

function readData(filename) {
  const fd = fs.openSync(filename);
  try {
    const header = Buffer.alloc(12);
    fs.readSync(fd, header, 0, 12, 0);

    const magic = header.readInt32LE(0);
    if (magic !== 0xdadafeed) {
      throw new Error("File is of wrong type");
    }

    const offset = header.readInt32LE(4);
    const length = header.readInt32LE(8);

    const data = Buffer.alloc(length);
    fs.readSync(fd, data, 0, length, offset);
    return data;
  } finally {
    fs.closeSync(fd);
  }
}
