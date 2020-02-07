
function X(n) {
  this.n = n;
}

let x = X()    // forgot 'new'
console.log(x) // -> undefined

class Y {
  constructor(n) {
    this.n = n
  }
}

let y = Y() // forgot 'new' -> ERROR

