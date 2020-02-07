function curry2(f) {
   return (a) => (b) => f(a, b);
}

let curriedMul = curry2((a, b) => a * b);
let mul11 = curriedMul(11); 
console.log(curriedMul(11)(17)); // -> 187
console.log(mul11(15));          // -> 165