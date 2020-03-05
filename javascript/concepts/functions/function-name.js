/*
  Since a function is an object, you can ask for its name
*/

// A 'named' function has an obvious name
function f1() {}
console.log(f1.name);

// An anonymous function also gets a name (it is cleverly deduced by Javascript)
const f2 = function() {};
console.log(f2.name);

// What about a copy of f2?
const f3 = f2;
console.log(f3.name);

// The name is emtpy in this case (Javascript won't deduce it)
const f4 = [function() {}];
console.log(`"${f4[0].name}"`);

// You can name a function even if you store it somewhere else
const f5 = function abc() {};
console.log(f5.name);
