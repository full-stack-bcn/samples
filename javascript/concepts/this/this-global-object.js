/*
  'this' in the global context points to the global object
*/

// Do *not* run this file with 'node this-global-object.js'
// (when you do that, the code is considered a module, and the effect is different)
//
// To run this file : 
// 1) type the commands in the NodeJS console directly, or 
// 2) Pipe the script to the stdin of Node with: "cat this-global-object.js | node" 

this.testVariable = 7;
console.log(global.testVariable);
console.log(testVariable);

