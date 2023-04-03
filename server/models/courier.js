const mongoose = require("mongoose");

const courier = mongoose.Schema({
  student_name: String,
  ID: Number,
  description: String
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  },
});

const courierMessage = mongoose.model("courierMessage", courier);

module.exports = courierMessage;
