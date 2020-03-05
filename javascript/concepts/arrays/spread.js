// The spread operator can be used with arrays to
// "spread" all elements in an array literal
let source = [3, 4];
let dest = [1, 2, ...source, 5];
console.log(dest);

// We can even use the same array twice
let source2 = [...source, ...source];
console.log(source2);

// Array spread just asks for spreaded object to be an 'Iterable'
let text = "lorem ipsum";
let a = [...text];
console.log(a);


