const express = require("express");
const router = express.Router();

const { getComplaints,  } = require("../controllers/complaints");
const {createComplaints} = require("../controllers/complaints");
const {deleteComplaint} = require("../controllers/complaints");
// const {updateComplaint} = require("../controllers/complaints");
router.get("/", getComplaints);
router.post("/", createComplaints);
router.delete("/", deleteComplaint);
// router.put("/", updateComplaint);

module.exports = router;
