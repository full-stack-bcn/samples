// What happens if you forget to call a constructor with new?
class Y {
  constructor(n) {
    this.n = n;
  }
}

let y = Y(); // forgot 'new' -> ERROR
