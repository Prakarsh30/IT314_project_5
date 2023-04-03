const mongoose = require("mongoose");

const lostandfound = mongoose.Schema({
  thing: String,
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const lostandfoundMessage = mongoose.model("lostandfoundMessage", lostandfound);

module.exports = lostandfoundMessage;
