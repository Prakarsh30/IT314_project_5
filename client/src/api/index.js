const axios = require("axios");

const url = "http://localhost:5000";

// const fetchComplaints = () => axios.get(`${url}/complaints`);
export const fatchlogin = () => axios.get(`${url}/login`);

