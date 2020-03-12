function f(obj) {
  obj.wrongMethod();
}

function g(x) {
  x.anotherMethod(y);
}

try {
  f({});
  g(2);
} catch (e) {
  switch (e.name) {
    case "ReferenceError":
      console.log(`ReferenceError: ${e.message}`);
      break;
    default:
      console.log(`Other type of error:\n ${e.name}: ${e.message}`);
  }
}
