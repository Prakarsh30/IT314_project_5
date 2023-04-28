const mongoose = require("mongoose");

// time stamp true
const complaints = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
  },
  creator: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 1,
  },
  dislikeCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});


const complaintMessage = mongoose.model("complaintMessage", complaints);

module.exports = complaintMessage;
