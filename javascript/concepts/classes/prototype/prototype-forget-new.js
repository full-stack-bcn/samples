// What happens if you forget to call a constructor with new?

function X(n) {
  this.n = n;
}

let x = X(); // forgot 'new'
console.log(x); // -> undefined!!

// So you have to be really careful not to forget to add 'new' before the
// constructor