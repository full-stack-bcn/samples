const add = (a, b, fn) => fn(a + b);
const mul = (a, b, fn) => fn(a * b);

add(1, 2, res1 => mul(res1, 2, res2 => console.log(res2)));
