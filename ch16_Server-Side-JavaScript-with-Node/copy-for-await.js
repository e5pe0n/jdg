function write(stream, chunk) {
  const hasMoreRoom = stream.write(chunk);
  if (hasMoreRoom) {
    return Promise.resolve(null);
  } else {
    return new Promise((resolve) => {
      stream.once("drain", resolve);
    });
  }
}

async function copy(source, destination) {
  destination.on("error", (err) => process.exit());

  for await (const chunk of source) {
    await write(destination, chunk);
  }
}

copy(process.stdin, process.stdout);
