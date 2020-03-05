// An iterable implements the [Symbol.iterator] property
let word = "ABCDE";
let iterator = word[Symbol.iterator]();

// An iterator has a 'next' method which returns an object with the fields
// 'done' (if the iteration is over) and 'value' (the current value)
let res = iterator.next();
while (!res.done) {
  console.log(res.value);
  res = iterator.next();
}

// The for-of loop uses iterators, so it can be used with any iterable
for (let ch of word) {
  console.log(`- ${ch.toLowerCase()} -`);
}