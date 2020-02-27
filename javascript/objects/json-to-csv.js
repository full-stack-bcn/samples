const fs = require("fs");

const args = process.argv;
if (args.length != 3) {
  process.stderr.write(`usage: json-to-csv <file.json>\n`);
  process.exit(1);
}

const _print = str => process.stdout.write(str + "\n");

const file = args[2];
const content = fs.readFileSync(file).toString();
const json = JSON.parse(content);

if (!Array.isArray(json)) {
  process.stderr.write(`Data is not a list!\n`);
  process.exit(1);
}

const props = Object.keys(json[0]);

// Header
_print(props.join(";"));

// Data
for (let obj of json) {
  _print(props.map(p => obj[p]).join(";"));
}
