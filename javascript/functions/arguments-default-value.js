
function range(from, to, step = 1) {
  console.log(`range(${from}, ${to}, ${step})`)
  let A = [];
  for (let i = from; i <= to; i += step) {
    A.push(i);
  }
  return A;
}

// If I call range without a third parameter, the default value is used
console.log(range(1, 10));

// If I use the third parameter, the value I supply is taken
console.log(range(0, 100, 5));