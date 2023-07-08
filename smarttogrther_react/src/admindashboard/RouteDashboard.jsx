import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Dashbord";
import StudentData from "./StudentData";
import TeacherData from "./TeacherData";

import Sidebar from "./Sidebar";
import TopBarDashboard from "./TopBarDashboard";
import EditStudent from "../components/EditStudent";

const RouteDashboard = () => {
  return (
    <>
      <div className="container-fluid px-0 row ">
        <div className="col-2 px-0" style={{ posistion: "fixed" }}>
          <Sidebar />
        </div>

        <div className="col-10 px-0  ">
          <TopBarDashboard />

          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="student" element={<StudentData />} />
            <Route path="teacher" element={<TeacherData />} />
            <Route path="/editStudent/:id" element={<EditStudent />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default RouteDashboard;
