const mongoose = require("mongoose");

const notice = mongoose.Schema({
  Heading:{
    type: String,
    required: true,
    minlength: 3
  },
  content:{
    type: String,
    required: true,
    minlength: 10
  },
  writer:{
    type: String,
    required: true,
    minlength: 3
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const noticeMessage = mongoose.model("noticeMessage", notice);

module.exports = noticeMessage;