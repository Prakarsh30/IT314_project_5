// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = 5000;
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(process.env.PORT || PORT, (req, res) => {
      console.log(
        "Server is listening on,",
        `http://localhost:${process.env.PORT || PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//comment main
const homepageRoute = require("./routes/homepage");
const complaintsRoute = require("./routes/complaints");
const couriersRoute = require("./routes/couriers");
const lostnfoundRoute = require("./routes/lostnfound");
const noticeRoute = require("./routes/notice");
const loginRoute = require("./routes/login");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/login", loginRoute);
app.use("", homepageRoute);
app.use("/complaints", complaintsRoute);
app.use("/couriers", couriersRoute);
app.use("/lostnfound", lostnfoundRoute);
app.use("/notice", noticeRoute);
