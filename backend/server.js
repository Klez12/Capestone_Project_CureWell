

const express = require("express");
const cors = require("cors");
const db = require("./db");
const specializationRoutes = require("./routes/specialization");
const doctorRoutes = require("./routes/doctor");
const doctorSpecRoutes = require("./routes/doctorSpecialization");
const surgeryRoutes = require("./routes/surgery");
const app = express();

app.use(cors());
app.use(express.json());


// routes
app.use("/doctors", doctorRoutes);
app.use("/specialization", specializationRoutes);
app.use("/doctor-specialization", doctorSpecRoutes);
app.use("/surgery", surgeryRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});