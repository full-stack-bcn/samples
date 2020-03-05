// The main file in a package without 'package.json' is index.js

const perimeter = radius => 2 * Math.PI * radius;
const area = radius => Math.PI * radius ** 2;

// We overwrite the exports object and thus we need to do it in the module
// object
module.exports = {
  area,
  perimeter
};

console.log("circle/index.js directory module loaded!");
