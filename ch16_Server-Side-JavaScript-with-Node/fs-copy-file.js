const fs = require("fs");

fs.copyFileSync("src.txt", "dst.txt");
fs.copyFile(
  "src.txt",
  "dst.txt",
  fs.constants.COPYFILE_EXCL, // copy a file only when a file with the same name does not exist
  (err) => {
    // handle error
  }
);

fs.promises
  .copyFile(
    "src.txt",
    "dst.txt",
    fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE
  )
  .then(() => {
    console.log("copy complete");
  })
  .catch((err) => {
    console.error("copy failed", err);
  });
