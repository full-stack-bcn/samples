
const args = process.argv.slice(2);
let a = Number(args[0]);
let b = Number(args[2]);
let op = args[1];

switch (op) {
  case '+': console.log(a + b); break;
  case '-': console.log(a - b); break;
  case '*': console.log(a * b); break;
  case '/': console.log(a / b); break;
  default: console.log(`Don't know operator ${op}`);
}
