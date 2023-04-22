const complaintMessage = require("../models/complaints");

const getComplaints = async (req, res) => {
  try {
    const complaintMessages = await complaintMessage.find();
    res.status(200).json(complaintMessages);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const createComplaints = async (req, res) => {
  const complaint = req.body;

  const newComplaint = new complaintMessage(complaint);
  console.log(newComplaint);
  try {
    await newComplaint.save();
      console.log("hey" , newComplaint);

    res.status(200).send(newComplaint);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteComplaint = async (req, res) => {
  // delete requested ID
  const { _id } = req.body;

  const complaint = await complaintMessage.findByIdAndDelete(_id);

  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// exports.updateComplaint = async (req, res) => {
//   // update requested ID
//   const { _id } = req.body;
//   if(_id==req.

module.exports = { getComplaints, createComplaints };
