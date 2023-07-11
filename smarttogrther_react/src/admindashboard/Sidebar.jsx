import React from "react";

import {
  FaChalkboardTeacher,
  FaComment,
  FaDashcube,
  FaDiscourse,
 
  FaNewspaper,
 
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid bg-dark px-2 mx-auto">
        <div className="" style={{ height: "100vh" }}>
          <nav className=" px-2 flex-column">
        
              <span className="text-uppercase bg-danger text-primary py-2 fs-4 text-align-center ">
                SMART TOGETHER
              </span>
        

            <div className="container d-block link-style ">
              <Link to="/" className="nav-item nav-link py-3 text-white ">
                <FaDashcube /> <span className="px-2  ">Dashboard</span>
              </Link>
              <Link to="/student" className="nav-item nav-link py-3 text-white">
                <FaUsers /> <span className="px-2 ">Students</span>
              </Link>
              <Link to="/teacher" className="nav-item nav-link py-3 text-white">
                <FaChalkboardTeacher />
                <span className="px-2 ">Teacher</span>
              </Link>
              <Link to="/feedbackdata" className="nav-item nav-link py-3 text-white">
                <FaComment/>
                <span className="px-2 ">Feedback</span>
              </Link>
              <Link to="/courses" className="nav-item nav-link py-3 text-white">
                <FaDiscourse /> <span className="px-2 "> Courses</span>
              </Link>
              <Link to="/news" className="nav-item nav-link py-3 text-white">
              <FaNewspaper/>
                <span className="px-2 ">Mange News</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
