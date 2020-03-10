const log = console.log;

const compose = (...functions) => value =>
  functions.reduceRight((x, fn) => fn(x), value);

const plus1 = x => x + 1;
const mul2 = y => y * 2;

const A = [1, 2, 3, 4, 5];
log(A.map(plus1).map(mul2)); // -> [4, 6, 8, 10, 12]
log(A.map(compose(mul2, plus1))); // -> [4, 6, 8, 10, 12]
