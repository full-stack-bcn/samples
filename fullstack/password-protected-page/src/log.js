
const { LOG } = require('./config.js');

const log = (...args) => {
  if (LOG === "true") {
    console.log(...args);
  }
}

module.exports = { log }