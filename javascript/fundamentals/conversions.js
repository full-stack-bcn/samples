let n = 7;

/* 
  Number --> String 
*/

// 1. Use an explicit conversion
let sn1 = String(n);

// 2. Use string interpolation (backquote)
let sn2 = `${n}`;

// 3. Use the 'toString' method
let sn3 = n.toString();


console.log(sn1, sn2, sn3);

/* 
  String --> Number 
*/

let s = "42";

// 1. Use an explicit conversion
let n1 = Number(s);

// 2. Use the unary plus
let n2 = +s;

console.log(n1, n2);
