import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewDoctor() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/doctors")
      .then(res => setDoctors(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map(d => (
            <tr key={d.DoctorID}>
              <td>{d.DoctorID}</td>
              <td>{d.DoctorName}</td>
              <td>
                <button onClick={() => navigate(`/edit-doctor/${d.DoctorID}`)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ViewDoctor;