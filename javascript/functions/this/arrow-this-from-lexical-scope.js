/*
  Arrow functions don't have the 'this' variable
*/

// We define a normal variable
let a = 7;
// We put a field in the global object to see it later
this.yoohoo = true;


const showA = () => {
  // Get 'a' form the lexical scope (defined outside)
  console.log(a);
};


const showThis = () => {
  // The 'this' is the global object, taken from the lexical scope
  console.log(this);
};


showA();
showThis();
