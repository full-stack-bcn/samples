const fs = require("fs");

const args = process.argv;
if (args.length != 3) {
  process.stderr.write(`usage: csv-to-json <file.csv>\n`);
  process.exit(1);
}

const file = args[2];
const content = fs.readFileSync(file).toString();
const lines = content.split("\n");

const convert = value => {
  const asFloat = parseFloat(value);
  if (!Number.isNaN(asFloat)) return asFloat;
  const asInt = parseInt(value);
  if (!Number.isNaN(asInt)) return asInt;
  if (value === "true" || value === "false") {
    return value === "true";
  }
  return value;
};
const values = line => line.split(";").map(convert);

let objList = [];
const props = values(lines[0]);
for (let line of lines.slice(1)) {
  if (line === "") {
    continue;
  }
  const vals = values(line);
  if (vals.length != props.length) {
    process.stderr.write(`Wrong number of values: ${vals}\n`);
    continue;
  }
  let obj = {};
  for (let i = 0; i < props.length; i++) {
    obj[props[i]] = vals[i];
  }
  objList.push(obj);
}

console.log(JSON.stringify(objList, null, 2));
