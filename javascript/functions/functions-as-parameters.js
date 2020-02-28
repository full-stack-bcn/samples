
/*
  A function is "first class", so it can be passed as a parameter
*/

// This function calls 'func' with every number
const withRange = (from, to, func) => {
  for (let i = from; i <= to; i++) {
    func(i);
  }
}

// We can print the numbers
withRange(1, 10, i => console.log("->", i));

// ... or add them
let sum = 0;
withRange(1, 10, i => sum += i);
console.log("sum =", sum);

// ... or push them into an array
let array = [];
withRange(100, 110, i => array.push(i));
console.log(array);