require("dotenv").config();

const getEnvVar = (varName) => {
  const variable = process.env[varName];
  if (!variable) {
    console.error(`Environment variable ${varName} not set.`);
    process.exit(1);
  }
  return variable;
};

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

module.exports = {
  PORT: getEnvVar("PORT"),
  PASSWORD: getEnvVar("PASSWORD"),
  LOG: getEnvVar("LOG"),
  MAX_AGE: 12 * HOUR,
};
