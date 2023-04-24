const getComplaints = require("../controllers/complaints");
const createComplaints = require("../controllers/complaints");
const deleteComplaint = require("../controllers/complaints");
const complaintMessage = require("../models/complaints");
const request = require("supertest");
jest.mock("../models/complaints");
const baseURL = "http://localhost:5000";

// model compaints

// const mongoose = require("mongoose");

// const complaints = mongoose.Schema({
//   title: String,
//   message: String,
//   creator: String,
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
//   likeCount: {
//     type: Number,
//     default: 1,
//   },
//   dislikeCount: {
//     type: Number,
//     default: 0,
//   },
// });

// const getComplaints = async (req, res) => {
//     try {
//       const complaintMessages = await complaintMessage.find();
  
//       if (complaintMessages.length === 0) {
//         return res.status(404).json({ message: "No complaints found." })
//       }
  
//       res.status(200).json(complaintMessages)
  
//     } catch (error) {
//       console.error(error)
  
//       if (error.name === "CastError") {
//         return res.status(400).json({ message: "Invalid complaint ID." })
//       }
  
//       if (error.name === "ValidationError") {
//         return res.status(400).json({ message: error.message })
//       }
  
//       if (error.name === "MongoError" && error.code === 11000) {
//         return res.status(400).json({ message: "Duplicate complaint." })
//       }
  
//       res.status(500).json({ message: "Internal server error." })
//     }
//   }
  

// write test for getComplaints

describe("GET /complaints", () => {
  test("it should return 200 and an array of complaints if there are complaints in the database", async () => {
    const res = await request(baseURL).get("/complaints");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("it should return 404 if there are no complaints in the database", async () => {
    // Insert code to delete all complaints from the database here
    const res = await request(baseURL).get("/complaints");
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual("No complaints found.");
  });

  test("it should return 400 if the complaint ID is invalid", async () => {
    // Insert code to create a complaint with an invalid ID here

    // const complaint = await Complaint.create({ title: "Complaint 1",  message: "Complaint 1", creator: "Complaint 1" });
    const res = await request(baseURL).get("/complaints/invalid-id");
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Invalid complaint ID.");
  });

  test("it should return 400 if there is a validation error when querying the database", async () => {
    // Insert code to create a complaint with invalid data here
    const res = await request(baseURL).get("/complaints");
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch(/`.*` is required/); // Assumes that at least one required field is missing
  });

  test("it should return 400 if there is a duplicate complaint in the database", async () => {
    // Insert code to create a complaint with a duplicate value here

    // add duplicate value like this..

    const complaint1 = await Complaint.create({ title: "Complaint 1",  message: "Complaint 1", creator: "Complaint 1" });
    const complaint2 = await Complaint.create({ title: "Complaint 2",  message: "Complaint 2", creator: "Complaint 2" });


    const res = await request(baseURL).get("/complaints");
    expect(res.statusCode).toEqual(402);
    expect(res.body.message).toEqual("Duplicate complaint.");
  });

  test("it should return 500 if there is an internal server error", async () => {
    // Insert code to cause an internal server error here
    const res = await request(baseURL).get("/complaints");
    expect(res.statusCode).toEqual(500);
    expect(res.body.message).toEqual("Internal server error.");
  });
});



// const createComplaints = async (req, res) => {
//     const complaint = req.body;
  
//     const newComplaint = new complaintMessage(complaint);
//     console.log(newComplaint);
//     try {
//       await newComplaint.save();
//         console.log("hey" , newComplaint);
  
//       res.status(200).send(newComplaint);
//     } catch (error) {
//       res.status(409).json({ message: error.message });
//     }
//   };

// write test for createComplaints
describe("POST /complaints", () => {
    test("it should return 200", async () => {
        const res = await request(baseURL).post("/complaints");
        expect(res.statusCode).toEqual(200);
    });
    }
);

// const deleteComplaint = async (req, res) => {
//     // delete requested ID
//     const { _id } = req.body;
  
//     const complaint = await complaintMessage.findByIdAndDelete(_id);
  
//     try {
//       res.status(201).json({ message: "Successful" });
//     } catch (err) {
//       res.status(409).json({ message: err.message });
//     }
//   };

// write test for deleteComplaint
describe("DELETE /complaints", () => {
    test("it should return 201", async () => {
        const res = await request(baseURL).delete("/complaints");
        expect(res.statusCode).toEqual(201);
    });
    }
);
