class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && x <= this.to;
  }
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) {
      yield x;
    }
  }
  toString() {
    return `(${this.from}...${this.to})`;
  }
}

class Span extends Range {
  constructor(start, length) {
    if (length >= 0) {
      super(start, start + length);
    } else {
      super(start + length, start);
    }
  }
}
