const square = {
  area() {
    return this.side * this.side;
  },
  side: 10,
};
console.log(square.area()); // 100
