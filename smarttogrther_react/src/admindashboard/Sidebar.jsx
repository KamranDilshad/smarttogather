import React from "react";

import {
  FaChalkboardTeacher,
  FaDashcube,
  FaGraduationCap,
  FaLayerGroup,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid bg-dark px-2 mx-auto">
        <div className="" style={{ height: "100vh" }}>
          <nav className=" px-2 flex-column">
            <Link className="navbar-brand d-block ">
              <span className="text-uppercase text-white  ">
                SMART TOGETHER
              </span>
            </Link>

            <div className="container d-block link-style ">
              <Link to="/" className="nav-item nav-link py-3 text-white ">
                <FaDashcube /> <span className="px-2">Dashboard</span>
              </Link>
              <Link to="student" className="nav-item nav-link py-3 text-white">
                <FaUsers /> <span className="px-2">Students</span>
              </Link>
              <Link to="teacher" className="nav-item nav-link py-3 text-white">
                <FaChalkboardTeacher />
                <span className="px-2">Teacher</span>
              </Link>
              <Link to="contact" className="nav-item nav-link py-3 text-white">
                <FaLayerGroup />
                <span className="px-2">Groups</span>
              </Link>
              <Link to="contact" className="nav-item nav-link py-3 text-white">
                <FaProjectDiagram /> <span className="px-2">Projects</span>
              </Link>
              <Link to="contact" className="nav-item nav-link py-3 text-white">
                <span className="px-2">Created Matrial</span>
              </Link>
              <Link to="contact" className="nav-item nav-link py-3 text-white">
                <FaGraduationCap />
                <span className="px-2">Grading</span>
              </Link>
              <Link to="contact" className="nav-item nav-link py-3 text-white">
                <span className="px-2">Quiz</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
