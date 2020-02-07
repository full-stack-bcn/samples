
const args = process.argv.slice(2);
let sum = Number(args[0]);
for (let i = 1; i < args.length; i++) {
  sum += Number(args[i]);
}
console.log(sum);

