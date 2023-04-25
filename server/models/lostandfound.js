const mongoose = require("mongoose");
// <th>Item Name</th>
{/* <th>Item Description</th> */}
{/* <th>Student ID</th> */}
{/* <th>Student Contact</th> */}
{/* <th>Status</th> */}
{/* <th>Date</th> */}
const lostandfound = mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  studentid: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
  // get: time => time.toDateString()

}
);

const lostandfoundMessage = mongoose.model("lostandfoundMessage", lostandfound);

module.exports = lostandfoundMessage;
