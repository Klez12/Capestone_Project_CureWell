import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditDoctor from "./pages/EditDoctor";
import ViewSpecialization from "./pages/ViewSpecialization";
import DoctorSpecialization from "./pages/DoctorSpecialization";
import Navbar from "./components/Navbar";
import ViewDoctor from "./pages/ViewDoctor";
import AddDoctor from "./pages/AddDoctor";
import TodaySurgery from "./pages/TodaySurgery";
import AddSurgery from "./pages/AddSurgery"; 
import ViewDoctorsBySpec from "./pages/ViewDoctorBySpec";
import EditSurgery from "./pages/EditSurgery";
import UpdateSurgery from "./pages/UpdateSurgery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/doctors" element={<ViewDoctor />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/edit-doctor/:id" element={<EditDoctor />} />
        <Route path="/specialization" element={<ViewSpecialization />} />
        <Route
  path="/doctor-specialization"
  element={<DoctorSpecialization />}
/>
<Route path="/surgery" element={<TodaySurgery />} />
 <Route path="/add-surgery" element={<AddSurgery />} />
      <Route
  path="/spec-doctors/:code"
  element={<ViewDoctorsBySpec />}
/>
<Route path="/edit-surgery/:id" element={<EditSurgery />} />
      <Route
  path="/update-surgery"
  element={<UpdateSurgery />}
/>
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;