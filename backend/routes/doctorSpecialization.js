const express = require("express");
const router = express.Router();
const db = require("../db");


// GET all
router.get("/", (req, res) => {
  db.query("SELECT * FROM doctorSpecialization", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});


// ADD
router.post("/", (req, res) => {

  const { DoctorID, SpecializationCode, SpecializationDate } = req.body;

  db.query(
    "INSERT INTO doctorSpecialization VALUES (?, ?, ?)",
    [DoctorID, SpecializationCode, SpecializationDate],
    (err, result) => {
      if (err) res.send(err);
      else res.send("Added");
    }
  );

});

module.exports = router;