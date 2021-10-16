const PROPERTY_NAME = "p1";
const computePropertyName = () => "p" + 2;

const o = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
}; // { p1: 1, p2: 2 }

console.log(o.p1, o.p2);
