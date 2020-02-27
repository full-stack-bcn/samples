let secret_message = {
  from: "James Bond",
  to: "M",
  text: "Target terminated"
};
console.log(
  "From: " +
    secret_message.from +
    "\nTo:" +
    secret_message.to +
    "\nText: " +
    secret_message.text
);

let { from, to, text } = secret_message;
console.log("From: " + from + "\nTo: " + to + "\nText: " + text);

let object = {
  a: 1,
  b: "2",
  c: {
    d: 3,
    f: 4
  }
};

let {
  a,
  c: { d, f }
} = object;
console.log(a);
console.log(d);
console.log(f);

function reveal_message({ from, to, text }) {
  console.log("From: " + from + "\nTo: " + to + "\nText: " + text);
}

let secret_message2 = {
  from: "M",
  to: "James Bond",
  text: "Good job. Russians after us, tho. Call me."
};

reveal_message(secret_message2);
