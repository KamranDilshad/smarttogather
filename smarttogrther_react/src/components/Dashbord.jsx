import React from "react";
import { IconContext } from "react-icons";
import {
  FaBook,
  FaDashcube,
  FaEnvelope,
  FaGraduationCap,
  FaLayerGroup,
  FaProjectDiagram,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "./dashbord.css";

import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <>
      <div className="container-fluid d-flex px-0 row mx-auto">
        <div className="col-2 bg-dark px-0">
          <div className="" style={{ height: "100vh" }}>
            <nav className=" px-2 flex-column">
              <Link to="/" className="navbar-brand d-block ">
                <span className="text-uppercase text-white  ">
                  SMART TOGETHER
                </span>
              </Link>

              <div className="container d-block link-style ">
                <Link to="/" className="nav-item nav-link py-3 text-white ">
                  <FaDashcube /> <span className="px-2">Dashboard</span>
                </Link>
                <Link to="about" className="nav-item nav-link py-3 text-white">
                  <FaUsers /> <span className="px-2">Users</span>
                </Link>
                <Link
                  to="courses"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaBook />
                  <span className="px-2">Courses</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaLayerGroup />
                  <span className="px-2">Groups</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaProjectDiagram /> <span className="px-2">Projects</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <span className="px-2">Created Matrial</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaGraduationCap />
                  <span className="px-2">Grading</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <span className="px-2">Quiz</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="col-10 py-4  bg-light">
          <div className="continer-fluid d-flex">
            <form class="d-flex" role="search">
              <input
                class="form-control text-black "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>

            <span className="px-3">
              <FaEnvelope />
            </span>
          </div>
          <div className="py-5">
            <h1>Dashboard</h1>
          </div>
          {/* Card Section */}
          <div className="conitainer d-flex  justify-content-around">
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3 " />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem", height: "16rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
          </div>
          <div className="conitainer d-flex  justify-content-around py-3">
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3 " />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem", height: "16rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
            <div class="card" style={{ width: "14rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>5483</h2>
              </div>
            </div>
          </div>
          {/* popular courses */}
          <div className="py-3 d-flex jusitfy-content-between ">
         <h1>Popular Courses</h1>
       
          </div>
          <div class="card">
            <div class="card-body">
            <IconContext.Provider value={{ size: 25 }}>
                  <FaBook  />
                </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
