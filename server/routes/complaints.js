const express = require("express");
const router = express.Router();

const { getComplaints } = require("../controllers/complaints");
router.get("/", getComplaints);

module.exports = router;
