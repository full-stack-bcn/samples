
// This function returns a function defined inside,
// which references a variable outside itself (a closure)
function outer() {
  let a = 3; // first 'a'
  function inner() {
    // inner references the variable 'a'
    return a * 2;
  }
  return inner;
}

let a = 7; // second 'a'
let f = outer();

// Since 'f' is in fact 'inner', what value of 'a' is it going to refer to?
// 1. first 'a': it takes it from the lexical scope.
// 2. second 'a': it gets it from the stack (the running context).
f();

// The answer is: the first 'a', closures refer to variables in the lexical
// context.

