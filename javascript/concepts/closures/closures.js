
// A closure is a returned function that refers 
// to variables outside its scope

// 1. 
function twenty() {
  let x = 17;

  function inner() {
    return x * 2;
  }
  // The returned function refers to 'x' which is outside its scope
  return inner;
}

let f = twenty();
console.log(f());


// 2. 
function user(name, age) {
  function inner() {
    return `${name} ${age}`;
  }
  // 'inner' refers to name and age (which are outside its scope)
  return inner;
}

let g = user('Hari', 'Seldon');
console.log(g());

// 3.
function average(array) {
  let sum = 0;
  // The function we pass to forEach is a closure, because it references 'sum',
  // which is outside its scope
  array.forEach(n => sum += n);
  return sum / array.length;
}
console.log(average([1, 2, 3, 4]));

// 4.
function makeCounter() {
  let value = 0;
  function count() {
    // Value is defined outside 'count' so 'count' is a closure
    value++;
    return value;
  }
  return count;
}

let c = makeCounter();
console.log("c", c(), c());
let d = makeCounter();
console.log("d", d(), d());


