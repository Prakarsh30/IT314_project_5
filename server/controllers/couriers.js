const courierMessage = require("../models/courier");

const getCouriers = async (req, res) => {
  try {
    const courierMessages = await courierMessage.find();
    // console.log(courierMessages); ->> printed in console
    res.status(200).send(courierMessages);
    console.log("Sent data");
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const createCouriers = async (req, res) => {
  console.log("Adding Courier");
  const courier = req.body;

  // console.log(courier);
  const newCourier = new courierMessage(courier);

  // console.log(newCourier.couriedID);

  try {
    await newCourier.save();
    res.status(200).send(newCourier);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteCouriers = async (req, res) => {
  // delete requested ID
  // const { _id } = req.body;
  const _id = req.params.id;
  console.log(_id); 
  const courier = await courierMessage.findByIdAndDelete(_id);

  console.log(courier);
  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    // console.log("not deleted");
    res.status(409).json({ message: err.message });
  }
  console.log("Exit method");
};

module.exports = { getCouriers, createCouriers, deleteCouriers };