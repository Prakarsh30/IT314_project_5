const express = require("express");
const router = express.Router();

const {
  getComplaints,
  createComplaints,
  deleteComplaints,
} = require("../controllers/complaints");

router.get("/", getComplaints);
router.post("/", createComplaints);
router.delete("/:id", deleteComplaints);
// router.put("/", updateComplaint);

module.exports = router;
