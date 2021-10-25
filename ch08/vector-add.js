const vectorAdd = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
  x: x1 + x2,
  y: y1 + y2,
});

console.log(vectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 })); // { x: 4, y: 6 }
