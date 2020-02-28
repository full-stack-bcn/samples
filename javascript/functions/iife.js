// IIFE = Inmediately Invoked Function Expression (pronounced "iffy")
// - used before ES6 to close an environment (due to 'var' declarations)

(function() {
  // The variables that we use here will not be added to the global environment
  let a = 1;
  let b = "hi";
  console.log(a, b);
})();

// console.log(a, b);  // <-- Uncomment to see how 'a' and 'b' don't exist

/*-----------------------------------------------------------------------------
  Modern Javascript does not need IIFEs anymore, because we can obtain the same
  effect with code blocks plus 'let' and 'const'.
*/

// We simply create an extra pair of braces and it is a separate scope
// and 'a' and 'b' die with it.
{
  let a = 1;
  let b = "hi";
  console.log(a, b);
}
