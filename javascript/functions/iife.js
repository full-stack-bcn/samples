// IIFE = Inmediately Invoked Function Expression
// (pronounced "iffy")

(function() {
  // The variables that we use here will not be added to the global environment
  let a = 1;
  let b = "hi";
  console.log(a, b);
})();

// console.log(a, b);  // <-- Uncomment to see how 'a' and 'b' don't exist
