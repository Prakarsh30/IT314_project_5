const complaintMessage = require("../models/complaints");

// write getcomplaints with every test empty msg, msg with title, msg with message, msg with creator, msg with title and message, msg with title and creator, msg with message and creator, msg with title, message and creator
// const getComplaints = async (req, res) => {
//   try {
//     const complaintMessages = await complaintMessage.find();
//     res.status(200).json(complaintMessages);
//   } catch (error) {
//     res.status(409).send({ message: error.message });
//   }
// };
const getComplaints = async (req, res) => {
  try {
    const complaintMessages = await complaintMessage.find();

    if (complaintMessages.length === 0) {
      return res.status(404).json({ message: "No complaints found." });
    }

    res.status(200).json(complaintMessages);
  } catch (error) {
    console.error(error);

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid complaint ID." });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    if (error.name === "MongoError" && error.code === 11000) {
      return res.status(402).json({ message: "Duplicate complaint." });
    }

    res.status(500).json({ message: "Internal server error." });
  }
};

const createComplaints = async (req, res) => {
  const complaint = req.body;

  const newComplaint = new complaintMessage(complaint);
  //console.log(newComplaint);
  try {
    await newComplaint.save();
    // console.log("hey" , newComplaint);

    res.status(200).send(newComplaint);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteComplaints = async (req, res) => {
  // delete requested ID
  // const { _id } = req.body;
  const _id = req.params.id;

  const complaint = await complaintMessage.findByIdAndDelete(_id);

  try {
    //console.log("deleted");
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// exports.updateComplaint = async (req, res) => {
//   // update requested ID
//   const { _id } = req.body;
//   if(_id==req.

module.exports = { getComplaints, createComplaints, deleteComplaints };
