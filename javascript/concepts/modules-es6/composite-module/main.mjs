// NodeJS requires right now to use './models/index.mjs' to use the module
// but with './models' should be enough
import { User, Todo, Comment } from "./models/index.mjs";

const james = new User("James", 27);
const laundry = new Todo("laundry");
const salute = new Comment("I'm Bond", new Date(), james);

console.log(james, laundry, salute);
