const express = require("express");
const router = express.Router();

const { getCouriers } = require("../controllers/couriers");
router.get("/", getCouriers);

const { createCouriers } = require("../controllers/couriers");
router.post("/", createCouriers);

module.exports = router;
