function print({ from, to, text }) {
  console.log(`From: ${from}\nTo:   ${to}\nText: ${text}`);
}

let secretMessage = {
  from: "M",
  to: "James Bond",
  text: "Good job. Russians after us, tho. Call me."
};

print(secretMessage);
