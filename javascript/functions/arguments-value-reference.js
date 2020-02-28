
/* 
  Basic Types (Number, Boolean, String) pass *by value*
*/

function addOne(a) {
  a += 1;
}

let n = 5;
addOne(n);
// 'n' didn't change, because it was passed by value
console.log(n);



/*
  Object Types (Array, Object, ...) pass *by reference*
*/

function addItemOne(a) {
  a.push(1);
}

let table = [5, 4, 3, 2];
addItemOne(table);
// 'table' changed because it was passed by reference
console.log(table);
