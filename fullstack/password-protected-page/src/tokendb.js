
const { v4: uuidv4 } = require('uuid');

let tokenDB = new Map();

const removeExpiredTokens = () => {
  const now = new Date();
  const newTokenDB = new Map();
  tokenDB.forEach((expires, token) => {
    if (expires > now) {
      newTokenDB.set(token, expires);
    } else {
      console.log(`Removing token ${token}`);
    }
  })
  tokenDB = newTokenDB;
}

const createToken = (maxAge) => {
  removeExpiredTokens();
  const newToken = uuidv4();
  const now = new Date();
  const expireDate = new Date(Number(now) + maxAge);
  tokenDB.set(newToken, expireDate);
  console.log("New token created: ", newToken, expireDate);
  return newToken;
}

const hasToken = (token) => {
  if (tokenDB.has(token)) {
    const now = new Date();
    const expireDate = tokenDB.get(token);
    if (expireDate > now) {
      console.log(`Token ${token} is valid.`);
      return true;
    } else {
      console.log(`Token ${token} expired.`);
      tokenDB.delete(token);
      return false;
    }
  } else {
    console.log(`Token ${token} not found.`);
    return false;
  }
}

const deleteToken = (token) => {
  if (tokenDB.has(token)) {
    tokenDB.delete(token);
    console.log("Delete token: ${token}");
    return true;
  }
  console.log("Attempted to delete token ${token} (not found)");
  return false;
}

module.exports = {
  createToken,
  hasToken,
  deleteToken,
}