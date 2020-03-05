
// A function is "first class", so it can be assigned to a variable
let f = function (a, b) {
  return a + ", then " + b;
}

// To call it, first we evaluate 'f', which gives us the function, then call it.
console.log((f)("A", "B"));