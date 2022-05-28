const mongoose = require("mongoose");
const { Schema } = mongoose;

const forumSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

const Forum = mongoose.model('forum', forumSchema);

module.exports = Forum;
