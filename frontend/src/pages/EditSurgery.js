import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditSurgery() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    axios.put(
      `http://localhost:5000/surgery/${id}`,
      {
        StartTime: start,
        EndTime: end,
      }
    )
    .then(() => {
      alert("Updated");
      navigate("/surgery");
    });

  };

  return (

    <div className="container">

      <h2>Edit Surgery Time</h2>

      <form onSubmit={handleSubmit}>

        Start Time

        <input
          value={start}
          onChange={(e)=>setStart(e.target.value)}
        />

        <br /><br />

        End Time

        <input
          value={end}
          onChange={(e)=>setEnd(e.target.value)}
        />

        <br /><br />

        <button>
          Save
        </button>

      </form>

    </div>

  );

}

export default EditSurgery;


