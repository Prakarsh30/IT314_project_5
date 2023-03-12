const express = require("express");
const router = express.Router();

const { getlostnfound } = require("../controllers/lostnfound");
router.get("/", getlostnfound);

module.exports = router;
