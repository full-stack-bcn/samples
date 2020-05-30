const { v4: uuidv4 } = require("uuid");
const { log } = require("./log");

let tokenDB = new Map();

const removeExpiredTokens = () => {
  const now = new Date();
  const newTokenDB = new Map();
  tokenDB.forEach((expires, token) => {
    if (expires > now) {
      newTokenDB.set(token, expires);
    } else {
      log(`Removing token ${token}`);
    }
  });
  tokenDB = newTokenDB;
};

const createToken = (maxAge) => {
  removeExpiredTokens();
  const newToken = uuidv4();
  const now = new Date();
  const expireDate = new Date(Number(now) + maxAge);
  tokenDB.set(newToken, expireDate);
  log("New token created: ", newToken, expireDate);
  return newToken;
};

const hasToken = (token) => {
  if (tokenDB.has(token)) {
    const now = new Date();
    const expireDate = tokenDB.get(token);
    if (expireDate > now) {
      log(`Token ${token} is valid.`);
      return true;
    } else {
      log(`Token ${token} expired.`);
      tokenDB.delete(token);
      return false;
    }
  } else {
    log(`Token ${token} not found.`);
    return false;
  }
};

const deleteToken = (token) => {
  if (tokenDB.has(token)) {
    tokenDB.delete(token);
    log("Delete token: ${token}");
    return true;
  }
  log("Attempted to delete token ${token} (not found)");
  return false;
};

module.exports = {
  createToken,
  hasToken,
  deleteToken,
};
