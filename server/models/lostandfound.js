const mongoose = require("mongoose");
// <th>Item Name</th>
{
  /* <th>Item Description</th> */
}
{
  /* <th>Student ID</th> */
}
{
  /* <th>Student Contact</th> */
}
{
  /* <th>Status</th> */
}
{
  /* <th>Date</th> */
}
const lostandfound = mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  studentid: {
    type: String,
    required: true,
    minlength: 3,
  },
  contact: {
    type: String,
    required: true,
    minlength: 3,
  },
  status:{
    type: String,
  }
});

const lostandfoundMessage = mongoose.model("lostandfoundMessage", lostandfound);

module.exports = lostandfoundMessage;
