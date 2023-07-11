import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Dashbord";
import StudentData from "./StudentData";
import TeacherData from "./TeacherData";
import Sidebar from "./Sidebar";
import FeedBackData from "./FeedBackData";
import TopbarDashbord from "./TopBarDashboard";
import EditStudent from "./EditStudent";
import CourseData from "./CourseData";
import EditCourseData from "./EditCourseData";
import PostNews from "./PostNews";
import CreateNews from "./CreateNewss";
import EditNews from "./EditNews";
import EditTeacher from "./EditTeacher";
const RouteDashboard = () => {
  return (
    <>
      <div className="container-fluid px-0 row ">
        <div className="col-2 px-0" style={{ posistion: "fixed" }}>
          <Sidebar />
        </div>

        <div className="col-10 px-2  ">
          <TopbarDashbord />
          <div className="py-2">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/student" element={<StudentData />} />
              <Route path="/teacher" element={<TeacherData />} />
              <Route path="/courses" element={<CourseData />} />
              <Route path="/news" element={<PostNews />} />
              <Route path="/editStudent/:id" element={<EditStudent />} />
              <Route path="/editTeacher/:id" element={<EditTeacher/>} />
              <Route path="/editcourses/:id" element={<EditCourseData />} />
              <Route path="/editnews/:id" element={<EditNews/>} />
              <Route path="/feedbackdata" element={<FeedBackData />} />
              <Route path="/createNews" element={<CreateNews />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteDashboard;
