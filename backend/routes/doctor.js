const express = require("express");
const router = express.Router();
const db = require("../db");


// GET all doctors
router.get("/", (req, res) => {
  db.query("SELECT * FROM doctor", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


// ADD doctor
router.post("/", (req, res) => {
  const { DoctorName } = req.body;

  db.query(
    "INSERT INTO doctor (DoctorName) VALUES (?)",
    [DoctorName],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Doctor added");
      }
    }
  );
});


// UPDATE doctor
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { DoctorName } = req.body;

  db.query(
    "UPDATE Doctor SET DoctorName=? WHERE DoctorID=?",
    [DoctorName, id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Doctor updated");
      }
    }
  );
});


// DELETE doctor
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM Doctor WHERE DoctorID=?",
    [id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Doctor deleted");
      }
    }
  );
});

module.exports = router;