class StupidError extends Error {
  constructor(message) {
    super(message);
    this.name = "StupidError";
  }
}

try {
  throw new StupidError();
} catch (e) {
  console.log(e.name);
}
