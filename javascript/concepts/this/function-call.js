/*
  The Function.prototype.call method allows us to set 'this' + arguments.
*/

function compute(op) {
  switch (op) {
    case '+': console.log(this.a + this.b); break;
    case '-': console.log(this.a - this.b); break;
  }
}

// By using 'call', we can set the 'this' object and also the arguments.
compute.call(
  { a: 4, b: 6 }, // this
  '+' // arguments
);
compute.call({ a: 2, b: 5 }, '-');
