const express = require("express");
const router = express.Router();
const db = require("../db");


router.put("/:id", (req, res) => {

  const id = req.params.id;

  const { StartTime, EndTime } = req.body;

  const sql =
    "UPDATE surgery SET StartTime=?, EndTime=? WHERE SurgeryID=?";

  db.query(
    sql,
    [StartTime, EndTime, id],
    (err, result) => {
      if (err) res.send(err);
      else res.send("Updated");
    }
  );

});

// GET today's surgery
// router.get("/today", (req, res) => {

//  const sql = `
//     SELECT 
//       surgery.SurgeryID,
//       surgery.SurgeryDate,
//       surgery.StartTime,
//       surgery.EndTime,
//       surgery.SurgeryCategory,
//       doctor.DoctorName
//     FROM surgery
//     JOIN doctor
//       ON surgery.DoctorID = doctor.DoctorID
//     WHERE surgery.SurgeryDate = CURDATE()
//   `;

//   db.query(sql, (err, result) => {
//     if (err) res.send(err);
//     else res.send(result);
//   });

// });
router.get("/today", (req, res) => {

  const sql = "SELECT * FROM surgery";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);   
        }

  });

});

router.get("/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "SELECT * FROM surgery WHERE SurgeryID=?",
    [id],
    (err, result) => {

      if (err) res.send(err);
      else res.send(result[0]);  

    }
  );

});


// ADD surgery
router.post("/", (req, res) => {

  const {
    DoctorID,
    SurgeryDate,
    StartTime,
    EndTime,
    SurgeryCategory
  } = req.body;

  const sql = `
    INSERT INTO surgery
    (DoctorID, SurgeryDate, StartTime, EndTime, SurgeryCategory)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      DoctorID,
      SurgeryDate,
      StartTime,
      EndTime,
      SurgeryCategory
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send("Added");
      }

    }
  );

});

router.post("/full", (req, res) => {

  const {
    SurgeryID,
    DoctorID,
    SurgeryDate,
    StartTime,
    EndTime,
    SurgeryCategory
  } = req.body;

  const sql = `
    INSERT INTO surgery
    (SurgeryID, DoctorID, SurgeryDate, StartTime, EndTime, SurgeryCategory)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      SurgeryID,
      DoctorID,
      SurgeryDate,
      StartTime,
      EndTime,
      SurgeryCategory
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send("Inserted");
      }

    }
  );

});

module.exports = router;