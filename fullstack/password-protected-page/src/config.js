require("dotenv").config();

const getEnvVar = (varName) => {
  const variable = process.env[varName];
  if (!variable) {
    console.error(`Environment variable ${varName} not set.`);
    process.exit(1);
  }
  return variable;
};

module.exports = {
  PORT: getEnvVar("PORT"),
  PASSWORD: getEnvVar("PASSWORD"),
  LOG: getEnvVar("LOG"),
};
