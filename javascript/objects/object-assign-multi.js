/*
  Object.assign can copy properties from many source objects into the
  destination object
*/

let source1 = {
  a: 1
};
let source2 = {
  b: true,
  c: "hi"
};
let source3 = {
  d: null,
  a: 777 // Repeated properties are given the last value
};

let result = Object.assign({}, source1, source2, source3);
console.log(result);
