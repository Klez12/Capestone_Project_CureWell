import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewDoctorsBySpec() {

  const { code } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/specialization/doctors/${code}`)
      .then(res => setList(res.data));

  }, [code]);


  return (

    <div className="container">

      <h2>Doctors</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>

          {list.map(d => (

            <tr key={d.DoctorID}>
              <td>{d.DoctorID}</td>
              <td>{d.DoctorName}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ViewDoctorsBySpec;