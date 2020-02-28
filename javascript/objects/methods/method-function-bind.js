/*
  Binding a method with the original object
*/

// We define a user with a method to say hi that uses his name
let user = {
  name: "Ryan",
  hi() {
    console.log("Hi, " + this.name + "!");
    console.log("   ('this' is:", this, ")");
  }
};

// We can call it normally
user.hi();

// But when we obtain the method (it is just a function)...
let hi = user.hi;
// ... and call it by itself, the name is undefined!
hi();
// Since we called 'fhi' without an object "on the left",
// it will consider 'this' to be the global object.

/*
  To produce the right behavior, we have to "bind" the user object
  to the method. There is a special method 'bind' in all Function objects 
  that does this.
*/

// We get the function again, but then "bind" it to the user object
let hiBound = user.hi.bind(user);
hiBound();

let otherUser = {
  name: "Mario",
}

// We could even bind the user (Ryan) hi method to some other object (Mario)
// (It seems illogical, but the mechanism allows it.)
let hiBoundMario = user.hi.bind(otherUser);
hiBoundMario();
