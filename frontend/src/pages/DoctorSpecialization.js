import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorSpecialization() {

  const [doctors, setDoctors] = useState([]);
  const [specs, setSpecs] = useState([]);

  const [doctorId, setDoctorId] = useState("");
  const [code, setCode] = useState("");
  const [date, setDate] = useState("");


// load doctors
  useEffect(() => {

    axios.get("http://localhost:5000/doctors")
      .then(res => setDoctors(res.data));

    axios.get("http://localhost:5000/specialization")
      .then(res => setSpecs(res.data));

  }, []);


// submit
  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post(
      "http://localhost:5000/doctor-specialization",
      {
        DoctorID: doctorId,
        SpecializationCode: code,
        SpecializationDate: date
      }
    )
    .then(() => alert("Added"))
    .catch(err => console.log(err));

  };


  return (
    <div>

      <h2>Doctor Specialization</h2>

      <form onSubmit={handleSubmit}>

        <select
          value={doctorId}
          onChange={e => setDoctorId(e.target.value)}
        >
          <option>Select Doctor</option>

          {doctors.map(d => (
            <option key={d.DoctorID} value={d.DoctorID}>
              {d.DoctorName}
            </option>
          ))}

        </select>


        <select
          value={code}
          onChange={e => setCode(e.target.value)}
        >
          <option>Select Specialization</option>

          {specs.map(s => (
            <option
              key={s.SpecializationCode}
              value={s.SpecializationCode}
            >
              {s.SpecializationName}
            </option>
          ))}

        </select>


        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <button>Add</button>

      </form>

    </div>
  );
}

export default DoctorSpecialization;