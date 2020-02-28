/* 
  Object properties have general (string) names
  Use brackets [] to access general string properties
*/

let obj = {
  a: 5,
  b: true
};

// We can refer to normal properties using []
obj["a"] = 13;
console.log(obj.a);

// We can create new properties
obj["new prop"] = false;
// we can't access this property as "obj.new prop" because of the space
console.log(obj);

// We can create new objects with general string properties from the start
let obj2 = {
  a: 5,
  b: true,
  ["new prop"]: false,
  ["some other prop"]: {
    c: "t"
  }
};
console.log(obj2);
