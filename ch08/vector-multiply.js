const vectorMultiply = ({ x, y }, scalar) => ({ x: x * scalar, y: y * scalar });

console.log(vectorMultiply({ x: 1, y: 2 }, 2)); // { x: 2, y: 4 }
