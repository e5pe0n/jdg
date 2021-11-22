async function grep(source, destination, pattern, encoding = "utf8") {
  source.setEncoding(encoding);
  destination.on("error", (err) => process.exit());

  let incompleteLine = "";
  for await (const chunk of source) {
    const lines = (incompleteLine + chunk).split("\n");
    incompleteLine = lines.pop();
    for (const line of lines) {
      if (pattern.test(line)) {
        destination.write(line + "\n", encoding);
      }
    }
  }
  if (pattern.test(incompleteLine)) {
    destination.write(incompleteLine + "\n", encoding);
  }
}

const pattern = new RegExp(process.argv[2]);
grep(process.stdin, process.stdout, pattern).catch((err) => {
  console.log(err);
  process.exit();
});
