function StupidError(message) {
  this.name = "StupidError";
  this.message = message || "You made a stupid mistake, fellow human!";
  this.stack = new Error().stack;
}
StupidError.prototype = Object.create(Error.prototype);
StupidError.prototype.constructor = StupidError;

try {
  throw new StupidError("Una burrada que he fet");
} catch (e) {
  console.log(e);
}
