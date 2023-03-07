const express = require("express");
const router = express.Router();

const { getCouriers } = require("../controllers/couriers");
router.get("/", getCouriers);

module.exports = router;
