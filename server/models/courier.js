const mongoose = require("mongoose");

const courier = mongoose.Schema({
  couriedID: Number,
  student_name: String,
  ID: Number,
  RecievedAt: {
    type: Date,
    default: new Date(),
  },
});

const courierMessage = mongoose.model("courierMessage", courier);

module.exports = courierMessage;
