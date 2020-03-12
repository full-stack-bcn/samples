// Let's create a bunch of objects first
let number = 7;
let array = [1, 2, 3];
let object = { a: 1, b: true, c: 'hi' };

// This Map will contain "comments about different objects" which is a form of
// "meta-data", stored outside of the objects themselves. So these are like
// "optional fields" of those objects, associated with the objects, but not
// stored inside them.
const comment = new Map();
comment.set(number, "It's the seventh integer");
comment.set(array, "An instance of the classical sequence of only three elements");
comment.set(object, "Wait, haven't I seen this object before?");

let allObjects = [number, array, object];
for (let x of allObjects) {
  console.log(x, comment.get(x));
}

// Beware! In the case of 7, the association is with the value 7
// (since all sevens are ===)
console.log(comment.get(7));