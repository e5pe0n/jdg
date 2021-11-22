const net = require("net");
const readline = require("readline");

const server = net.createServer();
server.listen(6789, () => {
  console.log("Delivering laughs on port 6789");
});
server.on("connection", (socket) => {
  tellJoke(socket)
    .then(() => socket.end())
    .catch((err) => {
      console.error(err);
      socket.end();
    });
});

const jokes = {
  Boo: "Don't cry...it's only a joke!",
  Lettuce: "Let us in! It's freezing out here!",
  "A little old lady": "Wow, I didn't know you could yodel!",
};

async function tellJoke(socket) {
  const randomElement = (a) => a[Math.floor(Math.random() * a.length)];
  const who = randomElement(Object.keys(jokes));
  const punchLine = jokes[who];

  const lineReader = readline.createInterface({
    input: socket,
    output: socket,
    prompt: ">> ",
  });

  function output(text, prompt = true) {
    socket.write(`${text}\r\n`);
    if (prompt) {
      lineReader.prompt();
    }
  }

  let stage = 0;

  output("Knock knock!");

  for await (const inputLine of lineReader) {
    if (stage === 0) {
      if (inputLine.toLowerCase() === "who's there?") {
        output(who);
        stage = 1;
      } else {
        output('Please type "Who\'s there?".');
      }
    } else if (stage === 1) {
      if (inputLine.toLowerCase() === `${who.toLowerCase()} who?`) {
        output(`${punchLine}`, false);
        return;
      } else {
        output(`Please type "${who} who?".`);
      }
    }
  }
}
