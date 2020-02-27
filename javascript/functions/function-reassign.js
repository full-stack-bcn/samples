function f() {
  return "I'm F";
}
f = function() {
  return "I'm the *new* F!!";
};

console.log(f());
