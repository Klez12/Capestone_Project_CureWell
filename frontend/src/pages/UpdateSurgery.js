import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateSurgery() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    SurgeryID: "",
    DoctorID: "",
    SurgeryDate: "",
    StartTime: "",
    EndTime: "",
    SurgeryCategory: ""
  });

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .post("http://localhost:5000/surgery/full", data)
      .then(() => {

        alert("Added");

        navigate("/surgery");

      });

  };

  return (

    <div className="container">

      <h2 style={{color:"red"}}>
        Update Surgery
      </h2>

      <form onSubmit={handleSubmit}>

        Surgery Id
        <input
          name="SurgeryID"
          value={data.SurgeryID}
          onChange={handleChange}
        />

        <br /><br />

        Doctor Id
        <input
          name="DoctorID"
          value={data.DoctorID}
          onChange={handleChange}
        />

        <br /><br />

        Surgery Date
        <input
          name="SurgeryDate"
          value={data.SurgeryDate}
          onChange={handleChange}
        />

        <br /><br />

        Start Time
        <input
          name="StartTime"
          value={data.StartTime}
          onChange={handleChange}
        />

        <br /><br />

        End Time
        <input
          name="EndTime"
          value={data.EndTime}
          onChange={handleChange}
        />

        <br /><br />

        Surgery Category
        <input
          name="SurgeryCategory"
          value={data.SurgeryCategory}
          onChange={handleChange}
        />

        <br /><br />

        <button>
          Update
        </button>

        <button
          type="button"
          onClick={()=>navigate("/surgery")}
        >
          Cancel
        </button>

      </form>

    </div>

  );

}

export default UpdateSurgery;