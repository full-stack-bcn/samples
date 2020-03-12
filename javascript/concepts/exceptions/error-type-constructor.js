class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}

function f(obj) {
  throw new MyError('I just wanted to be nice!');
  obj.wrongMethod();
}

function g(x) {
  x.anotherMethod(y);
}

try {
  f({});
  g(2);
} catch (e) {
  switch (e.constructor) {
    case ReferenceError:
      console.log(`ReferenceError: ${e.message}`);
      break;
    case MyError:
      console.log(`MyError: ${e.message}`);
      break;
    default:
      console.log(`Some other type of error`);
  }
}
