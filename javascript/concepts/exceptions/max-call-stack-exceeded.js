function f() {
  // Infinite looping function
  f();
}

try {
  f();
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}
