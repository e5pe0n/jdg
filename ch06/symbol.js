const position = { x: 0, y: 0 };
const dimensions = { width: 100, height: 75 };
const rect = { ...position, ...dimensions }; // { x: 0, y: 0, width: 100, height: 75 }
console.log(rect);
