class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  static parse(s) {
    const matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
      throw new TypeError(`Cannot parse Range from "${s}".`);
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
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

const r = new Range(1, 3);
console.log(r.includes(2)); // true
console.log(r.toString()); // (1..3)
const a = [...r];
console.log(a); // [ 1, 2, 3 ]

const r2 = Range.parse("(1...10)");
console.log(r2); // Range { from: 1, to: 10 }
