const args = process.argv;
for (let i = 2; i < args.length; i++) {
  console.log(`Argument[${i - 2}] = ${args[i]}`);
}
