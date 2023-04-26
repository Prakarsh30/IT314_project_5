const mongoose = require("mongoose");

const lostandfound = mongoose.Schema({
  thing: String,
  description: String,
  creator: String,
  contact: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  type: Boolean,
});

const lostandfoundMessage = mongoose.model("lostandfoundMessage", lostandfound);

module.exports = lostandfoundMessage;
