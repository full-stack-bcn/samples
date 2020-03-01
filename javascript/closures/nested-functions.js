// In Javascript a function can be defined inside another. Variables in the
// outer function can be referenced from the inner function

function outer() {
  let a = 3, b = true;

  function inner() {
    let x = a + 4;
    let y = (b ? 'hi' : 'ho');
    return `${x}${y}`;
  }

  let result = inner();
  return result;
}

console.log(outer());