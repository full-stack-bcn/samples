const perimeter = radius => 2 * Math.PI * radius;
const area = radius => Math.PI * radius ** 2;

// To make functions visible outside of the module
// we add them to the 'exports' object
exports.area = area;
exports.perimeter = perimeter;

// Determine the version
const fs = require('fs'), path = require('path');
const { version } = JSON.parse(fs.readFileSync(path.join(__dirname, '/package.json')));

console.log(`Loaded the circle package (v${version})!`);
