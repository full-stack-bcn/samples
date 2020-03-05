let primes = new Set([2, 3, 5, 7, 11, 13, 17, 23, 29, 31]);

if (primes.has(3)) {
  console.log("nice!");
}

let x = 12;
if (typeof x !== "bigint") {
  throw new TypeError("Not a bigint!");
}
