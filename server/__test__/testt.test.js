const { auth} = require('../controllers/user_detail');
const User = require('../models/user');
const request = require("supertest")
jest.mock('../models/user');
const baseURL = "http://localhost:5000";


// test empty field error 
describe("POST /login", () => {
    test("it should return 452", async () => {
        const res = await request(baseURL).post("/login").send({
            email: "not_empty",
            password: "not"
        });
        expect(res.statusCode).toEqual(452);

    });
});

// test invalid email error
describe("POST /login", () => {
    test("it should return 453", async () => {
        const res = await request(baseURL).post("/login").send({
            email: "20200018@daiict.ac.in",
            password: "kamaG5"
        });
        // console.log(res.statusCode);
        expect(res.statusCode).toEqual(453);

    });
});

// test invalid password error
describe("POST /login", () => {
    test("it should return 454", async () => {
        const res = await request(baseURL).post("/login").send({
            email: "202001018@daiict.ac.in",
            password: "kamaG5"
        });
        // console.log(res.statusCode);
        expect(res.statusCode).toEqual(454);
    });
});

// test valid login
describe("POST /login", () => {
    test("it should return 200", async () => {
        const res = await request(baseURL).post("/login").send({
            email: "202001018@daiict.ac.in",
            password: "kamalG5"
        });
        // console.log(res.statusCode);
        expect(res.statusCode).toEqual(200);
    });
});
