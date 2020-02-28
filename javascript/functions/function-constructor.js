// A function can be created with the Function constructor

const add2 = new Function('a', 'b', 'console.log(a + b)');
add2(5, 6);

// This can be useful to "generate" code
const ops = ['+', '-', '*', '/'];
const fns = ops.map(op => new Function('a', 'b', `return a ${op} b`));

let a = 12, b = 25;
fns.forEach((fn, i) => {
  console.log(`${a} ${ops[i]} ${b} = ${fn(a, b)}`);
})
