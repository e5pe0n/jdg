const EventEmitter = require("events");
const net = require("net");

const server = new net.Server(); // Server class is a subclass of EventEmitter
server.on("connection", (socket) => {
  socket.end("Hello World", "utf-8");
});
server.on("error", (err) => {
  console.error(err);
});
