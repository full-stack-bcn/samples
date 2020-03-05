// To produce a JSON string representing some Javascript object, use
// JSON.stringify

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

console.log(JSON.stringify(obj));