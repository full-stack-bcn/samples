let obj = {
  a: 1,
  b: "2",
  c: { d: true, f: "F" }
};

// Destructuring can also get fields from inside inner objects
let {
  a,
  c: { d, f }
} = obj;

console.log(a, d, f);
