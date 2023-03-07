const express = require("express");
const router = express.Router();

const { getNotice } = require("../controllers/notice");
router.get("/", getNotice);

module.exports = router;
