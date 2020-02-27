// https://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class

function Foo() {}
var foo = new Foo();

const _ = console.log;

_(typeof Foo); // -> "function"
_(typeof foo); // -> "object"
_(foo instanceof Foo); // -> true
_(foo.__proto__.constructor === Foo); // -> true
_(Foo.prototype.isPrototypeOf(foo)); // -> true

_(foo.constructor.name); // -> "Foo"
_(Foo.name); // -> "Foo"
