// We can create a homemade 'myBind' function a closure and
// 'Function.prototype.call'

function myBind(method, obj) {
  return (...params) => method.call(obj, ...params);
}

function compute(...args) {
  console.log(args, `${this.a} + ${this.b} =`, this.a + this.b);
}

const bound = myBind(compute, { a: 7, b: 11 });
bound(1, 2, 3);
