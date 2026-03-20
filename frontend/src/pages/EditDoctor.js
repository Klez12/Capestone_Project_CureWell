import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditDoctor() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  // load doctor data
  useEffect(() => {
    axios.get("http://localhost:5000/doctors")
      .then(res => {
        const doc = res.data.find(d => d.DoctorID == id);
        if (doc) setName(doc.DoctorName);
      });
  }, [id]);

  // update doctor
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/doctors/${id}`, {
      DoctorName: name
    })
    .then(() => {
      alert("Updated");
      navigate("/doctors");
    })
    .catch(err => console.log(err));
  };

  return (
    <div>

      <h2>Edit Doctor</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Update</button>

      </form>

    </div>
  );
}

export default EditDoctor;