const courierMessage = require("../models/courier");

const getCouriers = async (req, res) => {
  try {
    const courierMessages = await courierMessage.find();
    res.status(200).send(courierMessages);
    // console.log("Sent data");
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const createCouriers = async (req, res) => {
  // console.log("Adding Courier");
  const courier = req.body;

  const newCourier = new courierMessage(courier);

  try {
    // if duplicate : 459
    const existingCourier = await courierMessage.findOne({ couriedID: courier.couriedID});
    if (existingCourier) {
      return res.status(459).json({ message: "Courier with same ID already exists." });
    }
    // if no duplicate save it
    await newCourier.save();
    res.status(200).send(newCourier);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteCouriers = async (req, res) => {

  const _id = req.params.id;
  // console.log(_id); 
  const courier = await courierMessage.findByIdAndDelete(_id);

  // console.log(courier);
  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    // console.log("not deleted");
    res.status(409).json({ message: err.message });
  }
  // console.log("Exit method");
};

module.exports = { getCouriers, createCouriers, deleteCouriers };
