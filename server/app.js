const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 5000;
const CONNECTION_URL =
  "mongodb+srv://kirtan03:HostelManagementSystem@cluster0.9qmyhry.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log("Server is listening on,", `http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const homepageRoute = require("./routes/homepage");
const complaintsRoute = require("./routes/complaints");
const couriersRoute = require("./routes/couriers");
const lostnfoundRoute = require("./routes/lostnfound");
const noticeRoute = require("./routes/notice");

app.use("", homepageRoute);
app.use("/complaints", complaintsRoute);
app.use("/couriers", couriersRoute);
app.use("/lostnfound", lostnfoundRoute);
app.use("/notice", noticeRoute);
