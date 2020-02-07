function makeCounter2() {
   let count = 0;
   return {
      val: () => count,
      add: n => {
         count += n;
         return count;
      },
      reset: () => { count = 0; }
   };
}

let c1 = makeCounter2();
console.log(c1.val());
console.log(c1.add(2));
c1.reset();
console.log(c1.val());
