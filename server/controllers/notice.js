// this page is to diplsay notice page
const { json } = require("express");
const noticeMessage = require("../models/notice");

exports.getNotice = async(req, res) =>{
  // fetch all the notices
    console.log("get notice route huree")
    const notice = await noticeMessage.find();

    if(notice){
        res.status(200).json(notice);
    }else{
        res.status(404).json({message: "No notice found"});
    }
}

exports.postNotice = async(req, res) =>{
    // create a new notice
    
    const {Heading, content, writer} = req.body;
    const notice = await noticeMessage.create({Heading, content, writer});
    // print heading from notice
    try{
      noticeMessage.insertOne(notice);
        res.status(201).json(notice);
    }catch(err){
        res.status(409).json({message: err.message});
    }    
}

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