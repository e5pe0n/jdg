function clock(interval, max = Infinity) {
  function until(time) {
    return new Promise((resolve) => setTimeout(resolve, time - Date.now()));
  }
  return {
    startTime: Date.now(),
    cnt: 1,
    async next() {
      if (this.cnt > max) {
        return { done: true };
      }
      const targetTime = this.startTime + this.cnt * interval;
      await until(targetTime);
      return { value: this.cnt++ };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
