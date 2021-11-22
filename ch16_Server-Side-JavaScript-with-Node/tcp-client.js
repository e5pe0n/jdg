const socket = require("net").createConnection(6789, process.argv[2]);
socket.pipe(process.stdout);
process.stdin.pipe(socket);
socket.on("close", () => process.exit());
