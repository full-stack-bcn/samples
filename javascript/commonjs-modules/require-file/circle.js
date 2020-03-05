const perimeter = radius => 2 * Math.PI * radius;
const area = radius => Math.PI * radius ** 2;

// To make functions visible outside of the module
// we add them to the 'exports' object
exports.area = area;
exports.perimeter = perimeter;

console.log('circle module loaded!');
