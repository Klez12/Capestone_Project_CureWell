import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ViewSpecialization() {

  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/specialization")
      .then(res => setList(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="container">

      <h2>Specialization</h2>

      <table>

        <thead>
          <tr>
            <th>Specialization Code</th>
            <th>Specialization Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map(s => (
            <tr key={s.SpecializationCode}>
              <td>{s.SpecializationCode}</td>
              <td>{s.SpecializationName}</td>

              <td>
                <button
                    onClick={() =>
                        navigate(`/spec-doctors/${s.SpecializationCode}`)}>
                        View Doctors
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ViewSpecialization;