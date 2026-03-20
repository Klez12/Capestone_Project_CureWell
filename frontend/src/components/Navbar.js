import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-title">
        CureWell
      </div>


      <div className="nav-links">
      <Link to="/doctors">View Doctors</Link> |{" "}
      <Link to="/specialization">View Specialization</Link> |{" "}
      <Link to="/surgery">View Today's Surgery</Link> |{" "}
      <Link to="/add-doctor">Add Doctor</Link>
      </div>
      
      </div>
   
  );
}

export default Navbar;