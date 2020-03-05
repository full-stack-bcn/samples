let a = [1, 2, 3];
let b = [4, 5, 6];

// Using spread is very similar to using concat.
let c1 = [...a, ...b];
let c2 = [].concat(a, b);
console.log(c1);
console.log(c2);
