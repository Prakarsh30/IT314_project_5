const noticeMessage = require("../models/notice");

exports.postNotice = async (req, res) => {
  // create a new notice

  const { Heading, content, writer } = req.body;
  const notice = await noticeMessage.create({ Heading, content, writer });
  // print heading from notice
  try {
    noticeMessage.insertOne(notice);
    res.status(201).json(notice);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

exports.getNotice = async (req, res) => {
  // get all notices
  try {
    const notice = await noticeMessage.find();
    res.status(200).json(notice);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.deleteNotice = async (req, res) => {
  const id = req.params.id;
  // delete notice
  try {
    await noticeMessage.findByIdAndDelete(id).exec();
    res.send("Notice deleted");
  } catch (err) {
    //console.log(err);
  }
};

