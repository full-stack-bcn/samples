
// A function is "first class", so it can be stored into arrays' cells
let funcs = [
  (a, b) => a + b,
  (a, b) => a * b,
  (a, b) => a - b,
  (a, b) => a / b,
];

// To call a function, first we get it from the array, then call it
for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i](5, 12));
}
