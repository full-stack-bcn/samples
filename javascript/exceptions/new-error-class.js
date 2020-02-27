function StupidError(message) {
  this.name = "StupidError";
  this.message = message || "Has comès un error estúpid, chaval!";
  this.stack = new Error().stack;
}
StupidError.prototype = Object.create(Error.prototype);
StupidError.prototype.constructor = StupidError;

try {
  throw new StupidError("Una burrada que he fet");
} catch (e) {
  console.log(e);
}
