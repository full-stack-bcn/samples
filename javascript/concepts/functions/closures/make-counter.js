function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

let c1 = makeCounter();
let c2 = makeCounter();
console.log(c1());
console.log(c2());
console.log(c1());
