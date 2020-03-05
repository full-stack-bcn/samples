
let obj2 = {
  x: 0.01,
  y: 0.2,
  z: 12.7,
  t: 10.5
};

// Using the spread operator, we can capture the "rest" of the fields
let { x, y, ...rest } = obj2;

console.log(`x = ${x}, y = ${y} (and z = ${rest.z}, t = ${rest.t})`);
