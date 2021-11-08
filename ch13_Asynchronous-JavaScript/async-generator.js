function elapsedTime(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function* clock(interval, max = Infinity) {
  for (let cnt = 1; cnt <= max; cnt++) {
    await elapsedTime(interval);
    yield cnt;
  }
}

async function test() {
  for await (const tick of clock(300, 100)) {
    console.log(tick);
  }
}
