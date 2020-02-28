function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

let c1 = makeCounter();
let c2 = makeCounter();
console.log(c1());
console.log(c2());
console.log(c1());
