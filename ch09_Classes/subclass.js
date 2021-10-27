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

function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}

// Span prototype object inherits properties of Range prototype object
Span.prototype = Object.create(Range.prototype);
Span.prototype.constructor = Span;

Span.prototype.toString = function () {
  return `(${this.from}... +${this.to - this.from})`;
};

// Span instance s inherits not only the properties of the prototype of Span
// but also the properties of the prototype of Range
// because Span prototype object inherits the properties of the Range prototype object
const s = new Span(0, 10);
console.log(s.toString()); // (0... +10)
