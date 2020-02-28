/*
   Destructuring
*/
let obj1 = {
  a: 1,
  b: "hi"
};

let { a } = obj1;
const { b } = obj1;
console.log(`a = ${a}, b = ${b}`);

/* 
  2. Destructuring of the rest of fields
*/
let obj2 = {
  x: 0.01,
  y: 0.2,
  z: 12.7,
  t: 10.5
};

let { x, y, ...rest } = obj2;
console.log(`x = ${x}, y = ${y} (and z = ${rest.z}, t = ${rest.t})`);

/* 
  3. Renaming some fields 
*/
let obj3 = {
  name: "James",
  age: 27
};

let { name: user, age: years } = obj3;
console.log(`user = ${user}, years = ${years}`);
