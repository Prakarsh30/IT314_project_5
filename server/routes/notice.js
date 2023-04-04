const express = require("express");
const router = express.Router();

const { getNotice, postNotice } = require("../controllers/notice");
router.get("/", getNotice);
router.post("/", postNotice);


module.exports = router;

