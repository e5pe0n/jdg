function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) {
      yield x;
    }
  },
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
};

const r = new Range(1, 3);
console.log(r.includes(2)); // true
console.log(r.toString()); // (1...3)
const a = [...r];
console.log(a); // [ 1, 2, 3 ]
