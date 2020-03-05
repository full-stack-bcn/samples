const fs = require("fs");
const file = process.argv[2];

if (file == undefined) {
  console.error("What file?");
  process.exit(1);
}

const content = fs.readFileSync("bla.csv");
const lines = content.split("\n");
const newLines = [];
for (var line in lines) {
  newLines.add(line.split(",").join("; "));
}
fs.writeFileSync("bla.csv", newLines.join("\n"));
