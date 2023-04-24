const mongoose = require("mongoose");

// time stamp true
const complaints = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
  likeCount: {
    type: Number,
    default: 1,
  },
  dislikeCount: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});


const complaintMessage = mongoose.model("complaintMessage", complaints);

module.exports = complaintMessage;
