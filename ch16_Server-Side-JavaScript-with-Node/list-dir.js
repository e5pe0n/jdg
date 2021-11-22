const fs = require("fs");
const path = require("path");

async function listDirectory(dirpath) {
  const dir = await fs.promises.opendir(dirpath);
  for await (const entry of dir) {
    let name = entry.name;
    if (entry.isDirectory()) {
      name += "/";
    }
    const stats = await fs.promises.stat(path.join(dirpath, name));
    const size = stats.size;
    console.log(String(size).padStart(10), name);
  }
}

listDirectory("/workspaces/jdg");
// 4096 node_modules/
// 4096 ch03_Types-Values-and-Variables/
// 4096 ch04_Expressions-and-Operators/
// 4096 ch16_Server-Side-JavaScript-with-Node/
// 2453 .gitignore
// 4096 ch12_Iterators-and-Generators/
//   89 README.md
// 4096 ch10_Modules/
// 4096 .devcontainer/
// 4096 .git/
// 4096 ch07_Arrays/
// 4096 ch09_Classes/
// 4096 ch11_The_JavaScript_Standard_Library/
// 4096 ch14_Metaprogramming/
// 4096 ch06_Objects/
// 4096 ch13_Asynchronous-JavaScript/
// 4096 ch08_Functions/
