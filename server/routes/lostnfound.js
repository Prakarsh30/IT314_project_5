const express = require("express");
const router = express.Router();

const { getlostnfound } = require("../controllers/lostnfound");
// const { createlostnfound } = require("../controllers/lostnfound");
router.get("/", getlostnfound);
// router.post("/", createlostnfound);

module.exports = router;
