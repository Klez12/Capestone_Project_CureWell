

const express = require("express");
const cors = require("cors");
const db = require("./db");

const doctorRoutes = require("./routes/doctor");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/doctors", doctorRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});