const axios = require("axios");

const url = "https://hostel-management-system-2l8c.onrender.com/";

// const fetchComplaints = () => axios.get(`${url}/complaints`);
export const fatchlogin = () => axios.get(`${url}/login`);

