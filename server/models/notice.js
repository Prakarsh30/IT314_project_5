const mongoose = require("mongoose");

const notice = mongoose.Schema({
  Heading: String,
  content: String,
  writer: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const noticeMessage = mongoose.model("noticeMessage", notice);

module.exports = noticeMessage;
