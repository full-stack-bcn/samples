const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = {
  header: [],
  table: []
};

const prompt = () => process.stdout.write("> ");

const fromEntries = entries =>
  entries.reduce((obj, [key, value]) => ((obj[key] = value), obj), {});

const loadCSV = file => {
  const csv = String(fs.readFileSync(file));
  const [first, ...lines] = csv.split("\n");
  data.header = first.split(";");
  data.table = lines.map(line =>
    fromEntries(line.split(";").map((col, i) => [data.header[i], col]))
  );
  return data.table;
};

const saveCSV = file => {
  let content = data.header.join(";") + "\n";
  data.table.forEach(row => {
    content += data.header.map(prop => row[prop]).join(";") + "\n";
  });
  fs.writeFileSync(file, content);
};

const commands = {
  list: () => data.table,
  loadcsv: file => loadCSV(file),
  loadjson: file => (data = JSON.parse(file)),
  set: (row, col, value) => (data.table[row][col] = value),
  get: (row, col) => data.table[row][col],
  add: json => data.table.push(JSON.parse(json)),
  del: row => data.table.splice(row, 1),
  savecsv: file => saveCSV(file),
  savejson: file => fs.writeFileSync(file, JSON.stringify(data)),
  average: column =>
    data.table.map(obj => Number(obj[column])).reduce((a, b) => a + b, 0) /
    data.table.length,
  exit: () => readline.close()
};

prompt();
readline.on("line", line => {
  if (line === "quit" || line === "exit") {
    readline.close();
    return;
  }
  let [cmd, ...parts] = line.split(" ");
  if (cmd === "help") {
    for (let cmd in commands) {
      console.log(cmd, commands[cmd].length);
    }
  } else {
    let cmdFn = commands[cmd];
    if (cmdFn !== undefined) {
      if (cmdFn.length !== parts.length) {
        console.error("Wrong number of arugments");
      } else {
        console.log(cmdFn(...parts));
      }
    } else {
      console.error(`Unknown command ${cmd}`);
    }
  }
  prompt();
});
