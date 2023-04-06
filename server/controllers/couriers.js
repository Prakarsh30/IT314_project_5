const courierMessage = require("../models/courier");

const getCouriers = async (req, res) => {
  try {
    const courierMessages = await courierMessage.find();
    res.status(200).json(courierMessages);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const createCouriers = async (req, res) => {
  const courier = req.body;

  const newCourier = new courierMessage(courier);
  try {
    await newCourier.save();
    res.status(200).send(newCourier);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteCourier = async (req, res) => {
  // delete requested ID
  const { _id } = req.body;

  const courier = await courierMessage.findByIdAndDelete(_id);

  // console.log(courier);
  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    // console.log("not deleted");
    res.status(409).json({ message: err.message });
  }
};

module.exports = { getCouriers, createCouriers };
