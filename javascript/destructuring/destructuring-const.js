let obj = {
  p: "abc",
  q: false
};

// Destructuring can be done with 'const'.
// (p and q can't be changed)
const { p, q } = obj;

console.log(`p = ${p}, q = ${q}`);
