const noticeMessage = require("../models/notice");

const getNotices = async (req, res) => {
  try {
    const noticeMessages = await noticeMessage.find();
    res.status(200).json(noticeMessages);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const createNotices = async (req, res) => {
  const notice = req.body;

  const newNotice = new noticeMessage(notice);
  try {
    await newNotice.save();
    res.status(200).send(newNotice);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteNotice = async (req, res) => {
  // delete requested ID
  const { _id } = req.body;

  const notice = await noticeMessage.findByIdAndDelete(_id);

  try {
    res.status(201).json({ message: "Successful" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { getNotices, createNotices, deleteNotice};
