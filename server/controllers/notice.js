const noticeMessage = require("../models/notice");

    if(notice){
        res.status(200).json(notice);
    }else{
        res.status(404).json({message: "No notice found"});
    }
}

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

exports.deleteNotice = async(req, res) =>{

    const id = req.params.id;
    // delete notice
    try{
        await noticeMessage.findByIdAndDelete(id).exec();
        res.send("Notice deleted");
    }catch(err){
        console.log(err);
    }
}