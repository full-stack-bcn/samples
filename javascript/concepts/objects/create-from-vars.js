// If we have some variables...
let a = 1;
let b = false;
let c = "hi";


// We can create an object with the same exact fields
let obj1 = { a: a, b: b, c: c };
// ... but the repetition in the names is silly


// When this happens, we can omit the initialization:
let obj2 = { a, b, c };


console.log(obj1);
console.log(obj2);
