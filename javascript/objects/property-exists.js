// To check that an object has a certain property
let obj = {
  a: 5,
  b: true
};

// 1. Using the 'in' reserved word
if ("a" in obj) {
  console.log("Object", obj, "has property 'a'");
}

// 2. using the method 'hasOwnProperty'
if (obj.hasOwnProperty("a")) {
  console.log("Object", obj, "hasOwnProperty 'a'");
}

// Inherited properties: detected by 'in', not detected by 'hasOwnProperty'
if ("toString" in obj) {
  console.log("'toString' present! =", obj.toString);
}
if (!obj.hasOwnProperty("toString")) {
  console.log("'toString' is not an 'own' property");
}
