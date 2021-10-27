const p = {
  x: 1.0,
  y: 1.0,

  get r() {
    return Math.hypot(this.x, this.y);
  },
  set r(newvalue) {
    const oldvalue = Math.hypot(this.x, this.y);
    const ratio = newvalue / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },
  get theta() {
    return Math.atan2(this.y, this.x);
  },
};

console.log(p.r);
console.log(p.theta);
