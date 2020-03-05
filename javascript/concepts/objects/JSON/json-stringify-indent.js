
let obj = {
  a: 1,
  b: true,
  c: "hi",
  d: [1, 2, 3],
  e: {
    first: "James",
    last: "Bond"
  }
};

// To indent the output of JSON.stringify, use more parameters (the third is the
// number of indentation spaces)
console.log(JSON.stringify(obj, null, 2));