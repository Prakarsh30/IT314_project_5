// write code for login route
const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
const {auth} = require("../controllers/user_detail");
router.post('/',auth); 

module.exports = router; 