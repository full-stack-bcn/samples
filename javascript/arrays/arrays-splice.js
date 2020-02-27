let A = [1, 2, 3, 4, 5, 6];
A.splice(2, 2);
console.log(A); // -> [1, 2, 5, 6]

A = [1, 2, 3, 4, 5, 6];
A.splice(2, 2, 30, 40);
console.log(A);

A = [1, 2, 3, 4, 5, 6];
A.splice(2, 0, 2.4, 2.6);
console.log(A);

console.log(A.splice(-1));
