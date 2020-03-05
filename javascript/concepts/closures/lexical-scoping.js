
let x = 10;

function f() {
  console.log(x);
}

function g() {
  let x = 15;
  f();
}

g();