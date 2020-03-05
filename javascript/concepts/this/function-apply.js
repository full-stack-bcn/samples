/*
  'Function.prototype.apply' is identical to 'Function.prototype.call' 
  except that it receives an array of arguments
*/

function compute(op) {
  switch (op) {
    case '+': console.log(this.a + this.b); break;
    case '-': console.log(this.a - this.b); break;
  }
}

// By using 'call', we can set the 'this' object and also the arguments.
compute.apply({ a: 4, b: 6 }, ['+']);
compute.apply({ a: 2, b: 5 }, ['-']);
