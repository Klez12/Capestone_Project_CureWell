const express = require("express");
const router = express.Router();
const db = require("../db");


// GET all
router.get("/", (req, res) => {
  db.query("SELECT * FROM specialization", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});


// ADD
router.get("/doctors/:code", (req, res) => {

  const code = req.params.code;

  const sql = `
    SELECT doctor.DoctorID, doctor.DoctorName
    FROM doctor
    JOIN doctorSpecialization
    ON doctor.DoctorID = doctorSpecialization.DoctorID
    WHERE doctorSpecialization.SpecializationCode = ?
  `;

  db.query(sql, [code], (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });

});


// UPDATE
router.put("/:code", (req, res) => {
  const code = req.params.code;
  const { SpecializationName } = req.body;

  db.query(
    "UPDATE specialization SET SpecializationName=? WHERE SpecializationCode=?",
    [SpecializationName, code],
    (err, result) => {
      if (err) res.send(err);
      else res.send("Updated");
    }
  );
});


module.exports = router;