// lowest API to read and write a file
const fs = require("fs");

fs.open("data", (err, fd) => {
  if (err) {
    return;
  }
  try {
    fs.read(
      fd, // file descriptor
      Buffer.alloc(400),
      0, // offset (in the allocated buffer where to start fill bytes)
      400, // longth (to read bytes)
      20, // position (in the file where to start read bytes)
      (err, n, b) => {
        // n is the number of bytes actually read.
        // b is the buffer that they bytes were read into.
      }
    );
  } finally {
    fs.close(fd);
  }
});
