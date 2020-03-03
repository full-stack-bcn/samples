/*
  Arrow functions don't have the 'this' variable
*/

// We put a field in the global 'this' to see it later
this.yoohoo = true;

const showMe = () => {
  // The 'this' is the global one, taken from the lexical scope
  console.log(this);
};

showMe();
