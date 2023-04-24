const express = require("express");
const router = express.Router();

const { getLostnfound } = require("../controllers/lostnfound");
const { createLostnfound } = require("../controllers/lostnfound");
const { deleteLostnfound } = require("../controllers/lostnfound");
// const { createlostnfound } = require("../controllers/lostnfound");
router.get("/", getLostnfound);
router.post("/", createLostnfound);
router.delete("/", deleteLostnfound);

module.exports = router;
