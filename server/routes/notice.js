const express = require("express");
const router = express.Router();

const { getNotices } = require("../controllers/notice");
router.get("/", getNotices);

module.exports = router;
