class Histogram {
  constructor() {
    this.map = new Map();
  }

  count(key) {
    return this.map.get(key) || 0;
  }
  has(key) {
    return this.count(key) > 0;
  }
  get size() {
    return this.map.size;
  }
  add(key) {
    this.map.set(key, this.count(key) + 1);
  }
  delete(key) {
    const cnt = this.count(key);
    if (cnt === 1) {
      this.map.delete(key);
    } else if (cnt > 1) {
      this.map.set(key, cnt - 1);
    }
  }
  [Symbol.iterator]() {
    return this.map.keys();
  }
  keys() {
    return this.map.keys();
  }
  values() {
    return this.map.values();
  }
  entries() {
    return this.map.entries();
  }
}
