const lostandfoundMessage = require("../models/lostandfound");

const getLostnfound = async (req, res) => {
  try {
    const lostandfoundMessages = await lostandfoundMessage.find();
    res.status(200).json(lostandfoundMessages);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const createLostnfound = async (req, res) => {
  const lostnfound = req.body;

  const newLostnfound = new lostandfoundMessage(lostnfound);
  // console.log(newLostnfound);
  try {
    await newLostnfound.save();
    // console.log("hey", newLostnfound);

    res.status(200).send(newLostnfound);
  } catch (error) {
    // console.log("hey111", newLostnfound);
    res.status(409).json({ message: error.message });
  }
};

const deleteLostnfound = async (req, res) => {
  // delete requested ID
  const _id = req.params.id;
  // console.log(_id);

  const lostnfound = await lostandfoundMessage.findByIdAndDelete(_id);

  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
  // console.log("Exit method");
};

module.exports = { getLostnfound, createLostnfound, deleteLostnfound };
