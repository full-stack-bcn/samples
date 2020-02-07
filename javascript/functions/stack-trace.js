function second(obj) {
  obj.nonexistendMethod();
}
function first() {
  let x = { a: 1, b: "2", c: [3] };
  second(x);
}
first();
