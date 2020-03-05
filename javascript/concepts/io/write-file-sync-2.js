/* Write a file with some content */
const fs = require("fs");
fs.writeFileSync("json.txt", JSON.stringify({ a: 1, b: "2" }));
fs.writeFileSync("number.txt", 123);
fs.writeFileSync("obj.txt", { a: 1, b: 3 });
