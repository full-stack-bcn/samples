// If you call a function with no left object (like a standalone function and
// not a method) the 'this' object is the global object

// Let's add a field on the 'this' object
function addSneakyField(value) {
  this.sneakyFieldMadeByMe = value;
}

addSneakyField(17);
// If we show the global object, the field we added should be there.
console.log(global);


// This function checks if the global object is actually the 'this'
function checkGlobal() {
  if (this === global) {
    console.log("We are receiving the 'global' object!");
  }
}

checkGlobal();
