const { Glob } = require("./Glob");

function glob(ss, ...vs) {
  let s = ss[0];
  for (let i = 0; i < vs.length; ++i) {
    s += vs[i] + ss[i + 1];
  }
  return new Glob(s);
}

const root = "/tmp";
const filePattern = glob`${root}/*.html`;
console.log("/tmp/test.html".match(filePattern)[1]);
