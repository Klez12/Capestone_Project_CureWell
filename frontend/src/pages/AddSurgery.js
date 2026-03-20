import React, { useEffect, useState } from "react";
import axios from "axios";

function AddSurgery() {

  const [doctors, setDoctors] = useState([]);

  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [category, setCategory] = useState("");


// load doctors for dropdown
  useEffect(() => {

    axios
      .get("http://localhost:5000/doctors")
      .then(res => setDoctors(res.data));

  }, []);


// submit
  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post(
      "http://localhost:5000/surgery",
      {
        DoctorID: doctorId,
        SurgeryDate: date,
        StartTime: start,
        EndTime: end,
        SurgeryCategory: category
      }
    )
    .then(() => alert("Surgery added"))
    .catch(err => console.log(err));

  };


  return (

    <div>

      <h2>Add Surgery</h2>

      <form onSubmit={handleSubmit}>

        {/* doctor dropdown */}
        <select
          value={doctorId}
          onChange={e => setDoctorId(e.target.value)}
        >
          <option>Select Doctor</option>

          {doctors.map(d => (
            <option
              key={d.DoctorID}
              value={d.DoctorID}
            >
              {d.DoctorName}
            </option>
          ))}

        </select>


        <br />

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <br />

        <input
          type="time"
          value={start}
          onChange={e => setStart(e.target.value)}
        />

        <br />

        <input
          type="time"
          value={end}
          onChange={e => setEnd(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <br />

        <button>Add</button>

      </form>

    </div>

  );

}

export default AddSurgery;