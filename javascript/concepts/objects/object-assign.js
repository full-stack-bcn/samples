/*
  Object.assign copies properties from on object to another
*/

let dest = {
  a: 1,
  b: false
};
let source = {
  c: "hi",
  d: null
};

let result = Object.assign(dest, source);

console.log(result);
