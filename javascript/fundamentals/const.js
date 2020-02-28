
// "const" declares a variable but its value can't be changed (assigned)
const a = 5;
// a = 3; // <-- uncomment this to produce a TypeError


// You can't declare a "const" variable without an initial value
// const b; // <--- uncomment this to produce a SyntaxError


// When a "const" variable references an object, the object *can* be changed.
const table = [1, 2, 3, 4, 5];
table[2] = 'hi hi';
console.log(table); // --> [1, 2, 'hi hi', 4, 5]
