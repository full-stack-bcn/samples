/*

We ask the user her name and then issue a salutation

*/

const readline = require("readline");

let R = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

R.question("What is your name? ", answer => {
  console.log("Pleased to meet you, " + answer + "!");
  R.close();
});
