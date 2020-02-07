
let user = {
	name: "Ryan",
	hi() { console.log("Hi, " + this.name + "!"); }
};

user.hi();
let fhi = user.hi;
fhi();

let ghi = user.hi.bind(user);
ghi();