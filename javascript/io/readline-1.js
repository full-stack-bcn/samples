const readline = require("readline");

let R = readline.createInterface(process.stdin, process.stdout);

process.stdout.write("> ");

R.on("line", line => {
  if (line === "quit") {
    process.exit(0);
  }
  console.log("you typed: " + line);
  process.stdout.write("> ");
});
