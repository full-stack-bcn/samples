// An arrow function with many instructions needs braces {}
const f1 = () => {
  let a = "hi";
  let b = "ho";
  return `${a} ${b}`;
};

// How do we return an object in an arrow function?
// (it would be confused with the braces of the instruction block...)
const f2 = () => {
  return { // can I get rid of the 'return'?
    a: 1,
    b: true
  };
};

// Solution => put parentheses around the braces to turn them into an expression
const f3 = () => ({
  a: 1,
  b: true
})

console.log(f1());
console.log(f2());
console.log(f3());


