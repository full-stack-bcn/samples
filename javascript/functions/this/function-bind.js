/* 
  The bind method sets the value of 'this' within the function
*/

// Lets create a function that uses the 'this' variable
function compute() {
  console.log(`${this.a} + ${this.b} =`, this.a + this.b);
}

// If we call it directly, the 'this' object won't have 'a' and 'b'
compute();

// If we bind the function to an object with those fields, it will work correctly
let obj = { a: 2, b: 3 };
const boundCompute = compute.bind(obj);
boundCompute();

// We can also do it in one step
compute.bind({ a: 7, b: 11 })();
