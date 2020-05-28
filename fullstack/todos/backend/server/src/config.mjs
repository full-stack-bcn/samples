import dotenv from "dotenv";
dotenv.config();

const getVar = (name) => {
  const variable = process.env[name];
  if (!variable) {
    console.error(`${name} variable not set`);
    process.exit(1);
  }
  return variable;
};

export const FRONTEND_DIR = getVar("FRONTEND_DIR");
export const PORT = getVar("PORT");

