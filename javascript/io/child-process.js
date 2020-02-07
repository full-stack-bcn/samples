
const { spawn } = require('child_process');
const ls = spawn('ls', ['-la', '/usr']);

const copyToConsole = (data) => { console.log(String(data)); }

ls.stdout.on('data', copyToConsole);
ls.stderr.on('data', copyToConsole);

ls.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
