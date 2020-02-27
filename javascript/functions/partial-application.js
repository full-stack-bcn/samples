function exp(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

let exp10 = exp.bind(null, 10); // base = 10
let exp2 = exp.bind(null, 2); // base = 2

console.log(exp10(4)); // -> 10000
console.log(exp2(5)); // -> 32
