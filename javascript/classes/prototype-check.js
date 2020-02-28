// https://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class

function Foo() {}
var foo = new Foo();

console.log(typeof Foo); // -> "function"
console.log(typeof foo); // -> "object"
console.log(foo instanceof Foo); // -> true
console.log(foo.__proto__.constructor === Foo); // -> true
console.log(Foo.prototype.isPrototypeOf(foo)); // -> true

console.log(foo.constructor.name); // -> "Foo"
console.log(Foo.name); // -> "Foo"
