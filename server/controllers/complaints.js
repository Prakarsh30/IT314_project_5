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
  try {
    await newComplaint.save();
    res.status(200).send(newComplaint);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteComplaints = async (req, res) => {
  // delete requested ID
  const { _id } = req.body;

  const complaint = await complaintMessage.findByIdAndDelete(_id);

  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { getComplaints, createComplaints, deleteComplaints };
