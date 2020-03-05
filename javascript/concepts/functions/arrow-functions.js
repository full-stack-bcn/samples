/*

Arrow functions let us write less to say the same

*/

// These two functions do exactly the same:

const polyNormal = function (a, b, c, x) {
  return a*x*x + b*x + c;
}

const polyArrow = (a, b, c, x) => a*x*x + b*x + c;

console.log(polyNormal(3, 2, 5, 0.3))
console.log(polyArrow(3, 2, 5, 0.3))

