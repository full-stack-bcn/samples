function Counter() {
  let count = 0;
  return {
    value: () => count,
    inc: () => count++,
    add: n => (count += n),
    reset: () => (count = 0)
  };
}

let c = Counter();
console.log(c.value());
console.log(c.add(2));
c.reset();
c.inc();
console.log(c.value());
