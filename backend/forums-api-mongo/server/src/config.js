
require('dotenv').config();

const checkEnvVar = (name) => {
  if (process.env[name] === undefined) {
    throw new Error(`Undefined env. variable ${name}!!!`);
  }
  return process.env[name];
}

module.exports = {
  PORT: checkEnvVar('PORT'),
  MONGO_URL: checkEnvVar('MONGO_URL'),
};
