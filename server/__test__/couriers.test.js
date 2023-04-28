const getCouriers = require("../controllers/couriers");
const createCouriers = require("../controllers/couriers");
const deleteCouriers = require("../controllers/couriers");
const courierMessage = require("../models/courier");
const request = require("supertest");
jest.mock("../models/courier");
const baseURL = "https://hostel-management-system-2l8c.onrender.com";


describe("POST /couriers", () => {
    // test succesfull insertion
    test("it should return 200", async () => {
        const res = await request(baseURL).post("/couriers").send({
            student_name: "Deep Shah",
            couriedID: "AV34T32",
            room: "A203",
        });
        expect(res.statusCode).toEqual(200);
    });

    // test insertion with incomplete data
    test("it should return error", async () => {
        const res = await request(baseURL).post("/couriers").send({
            student_name: "",
            couriedID: "AVadd1",
            room: "D316",
        });
        expect(res.statusCode).toEqual(409);
    });

    // test if multiple couriers with same courier ID
    test("it should return 400 if there is a duplicate courier ID in the database", async () => {
        const res = await request(baseURL).post("/couriers").send({
            student_name: "Harsh Patel",
            couriedID: "AV34T65",
            room: "D208",
        });
        const res2 = await request(baseURL).post("/couriers").send({
            student_name: "Dhruv Prajapati",
            couriedID: "AV34T65",
            room: "D208",
        });

        expect(res2.statusCode).toEqual(459);
        expect(res2.body.message).toEqual("Courier with same ID already exists.");
    });
    }
);

