import React, { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (name.trim() === "") {
      setMsg("Doctor name is required");
      return;
    }

    axios.post("http://localhost:5000/doctors", {
      DoctorName: name,
    })
    .then(() => {
      setMsg("Doctor Successfully added")
      setName("");
    })
    .catch(() => {
      setMsg("Error adding doctor");
    });
    
  };

  return (
    <div className="container">
      <h2>Add a new Doctor</h2>

      <form onSubmit={handleSubmit}>
        
        Doctor Name

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br/> <br/>

        <button type="submit">Add Doctor</button>
      </form>
      <p className="success">{msg}</p>
    </div>
  );
}

export default AddDoctor;