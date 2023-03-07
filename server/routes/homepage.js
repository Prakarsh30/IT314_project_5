const express = require("express");
const router = express.Router();

const { getHomepage } = require("../controllers/homepage");

router.get("/", getHomepage);

module.exports = router;
