const fs = require("fs");

const dirPath = "/workspaces/jdg";

const filePaths = fs.readdirSync(dirPath);
console.log(filePaths);
// [
//   '.devcontainer',
//   '.git',
//   '.gitignore',
//   'README.md',
//   'ch03_Types-Values-and-Variables',
//   'ch04_Expressions-and-Operators',
//   'ch06_Objects',
//   'ch07_Arrays',
//   'ch08_Functions',
//   'ch09_Classes',
//   'ch10_Modules',
//   'ch11_The_JavaScript_Standard_Library',
//   'ch12_Iterators-and-Generators',
//   'ch13_Asynchronous-JavaScript',
//   'ch14_Metaprogramming',
//   'ch16_Server-Side-JavaScript-with-Node',
//   'node_modules'
// ]

fs.promises
  .readdir(dirPath, { withFileTypes: true })
  .then((entries) => {
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .forEach((name) => console.log(name));
  })
  .catch(console.error);

// .devcontainer
// .git
// ch03_Types-Values-and-Variables
// ch04_Expressions-and-Operators
// ch06_Objects
// ch07_Arrays
// ch08_Functions
// ch09_Classes
// ch10_Modules
// ch11_The_JavaScript_Standard_Library
// ch12_Iterators-and-Generators
// ch13_Asynchronous-JavaScript
// ch14_Metaprogramming
// ch16_Server-Side-JavaScript-with-Node
// node_modules
