// 'concat' concatenates arrays, putting all elements in sequence
let A = [1, 2];
A = A.concat(3, 4);
A = A.concat([5, 6, 7]);
A = A.concat([8, 9], 10, [11, 12, 13]);

console.log(A); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
