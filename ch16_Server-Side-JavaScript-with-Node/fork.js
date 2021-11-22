const child_process = require("child_process");

const child = child_process.fork(`${__dirname}/child.js`);

child.send({ x: 4, y: 3 }); // parent -> child

child.on("message", (message) => {
  console.log(message.hypotenuse);
  child.disconnect();
});
