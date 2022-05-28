
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Mongoose connected");
  } catch (e) {
    console.error(`Couldn't connect to MongoDB with Mongoose: ${e}`);
  }
}

module.exports = {
  connect,
}