class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  [Symbol.toPrimitive](arg) {
    if (arg == "string") {
      return `(${this.x}, ${this.y})`;
    } else if (arg == "number") {
      return this.x * this.x + this.y * this.y;
    } else {
      return this.x * this.x + this.y * this.y;
    }
  }
}

const v = new Vector(3, 4);
console.log(`v=${v}`); // v=(3, 4)
console.log(v + v); // 50
console.log(v + 100); // 125
console.log(v + "100"); // 25100
