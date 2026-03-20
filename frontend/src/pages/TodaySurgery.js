import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function TodaySurgery() {

  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get("http://localhost:5000/surgery/today")
      .then(res => setList(res.data))
      .catch(err => console.log(err));
 // axios.post("http://localhost:5000/surgery/full",data)
  }, []);


  return (

    <div className="container">

      <h2>View Today's Surgery</h2>

      <table>

        <thead>
          <tr>
            <th>Surgery Id</th>
            <th>Doctor Id</th>
            <th>Surgery Date</th>
            <th>End Time</th>
            <th>Start Time</th>
            <th>Surgery Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {list.map(s => (

            <tr key={s.SurgeryID}>

              <td>{s.SurgeryID}</td>

              <td>{s.DoctorID}</td>

              <td>{s.SurgeryDate}</td>

              <td>{s.EndTime}</td>

              <td>{s.StartTime}</td>

              <td>{s.SurgeryCategory}</td>

              <td>
                <button
  onClick={() =>
    navigate(`/edit-surgery/${s.SurgeryID}`)
  }
>
  Edit Surgery Time
</button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>


       <br />

      <button  onClick={() => navigate("/update-surgery")} >
        Update Surgery
        </button>
    </div>
  );
}
export default TodaySurgery;