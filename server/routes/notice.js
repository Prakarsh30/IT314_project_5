const express = require("express");
const router = express.Router();

const { getNotice, postNotice,deleteNotice } = require("../controllers/notice");
router.get("/", getNotice);
router.post("/", postNotice);
router.delete("/:id", deleteNotice);

module.exports = router;

