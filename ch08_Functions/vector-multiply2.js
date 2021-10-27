const vectorMultiply = ({ x, y, z = 0, ...props }, scalar) => ({
  x: x * scalar,
  y: y * scalar,
  z: z * scalar,
  ...props,
});
