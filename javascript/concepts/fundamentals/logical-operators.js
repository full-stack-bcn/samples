// Note: undefined, false, 0, "" are falsy

/* 
&& means evaluate the expression on the right 
if the expression on the left is a truthy 
*/
console.log(undefined && "hello1.1"); // undefined
console.log(false && "hello1.2"); // false
console.log(0 && "hello1.3"); // 0
console.log("" && "hello1.4"); // ""
console.log("hi" && "hello1.5"); // "hello1.5"


/* 
|| means evaluate the expression on the right 
if the expression on the left is a falsy 
*/
console.log(undefined || "hello2"); // "hello2"



/*
console.log(Expression1 && Expression2 || Expression3); // "hello3"
In the example:
    * Expression1 IS evaluated to undefined
    * Expression2 IS_NOT evaluated because of &&
    * Expression3 IS evaluated because:
        - Its left expr is a falsy (not evaluated, undefined)
        - Its previous operator is ||
    * Expression3 is the final result
*/
console.log(undefined && "hi" || "hello3"); // "hello3"


/*
console.log(Expression1 || Expression2 && Expression3);
In the example:
    * Expression1 IS evaluated to undefined
    * Expression2 IS evaluated because of ||
    * Expression3 IS evaluated because:
        - Its left expr is a truthy
        - Its previous operator is &&
    * Expression3 is the final result
*/
console.log(undefined || "hi" && "hello4"); // "hello4"
