// 'reduce' reduces a sequence to one value by applying a function to an
// accumulator and every element in the sequence
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = a.reduce((a, b) => a + b);
let max = a.reduce((a, b) => Math.max(a, b));
let mul = a.reduce((a, b) => a * b);
let str = a.reduce((a, b) => `${a}${b}`);

console.log("sum", sum);
console.log("max", max);
console.log("mul", mul);
console.log("str", str);
