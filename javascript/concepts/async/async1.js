console.log("Entering main");

function fA() {
  console.log("I'm function A");
}

function fB() {
  console.log("I'm function B");
}

setTimeout(fA, 2000);
setTimeout(fB, 0);

console.log("Exiting main");
