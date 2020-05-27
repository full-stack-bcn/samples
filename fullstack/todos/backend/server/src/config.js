require("dotenv").config();

const getVar = (name) => {
  const variable = process.env[name];
  if (!variable) {
    console.error(`${name} variable not set`);
    process.exit(1);
  }
  return variable;
};

const FRONTEND_DIR = getVar("FRONTEND_DIR");
const PORT = getVar("PORT");

module.exports = {
  FRONTEND_DIR,
  PORT,
};
