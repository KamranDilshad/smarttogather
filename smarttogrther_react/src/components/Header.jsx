import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in using local storage
    const storedLoggedIn = localStorage.getItem("loggedIn");
    const storedUsername = localStorage.getItem("username");

    if (storedLoggedIn && storedUsername) {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, [username]);

  // useEffect(() => {

  //   axios
  //     .get("http://localhost:8080/api/students" )
  //     .then((response) => setStudent(response.data.students))
  //     .catch((error) => console.error("Error fetching data:", error))
  //     .finally(() => {

  //     });
  // }, []);

  // const GetProfile = (id) => {
  //   axios
  //   .get("http://localhost:8080/api/students" +id )
  //   .then((response) => setStudent(response.data.students))
  //   .catch((error) => console.error("Error fetching data:", error))
  //   navigate("/profilegetstudent/" + id);
  // };
  const GetProfile = (id) => {
    axios
      .get(`http://localhost:8080/api/students/${id}`)
      .then((response) => {
        const studentData = response.data.students;
        console.log(studentData);
        setStudent(studentData);
        if(studentData!==null){

          navigate(`/profilegetstudent/${id}`);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleLogout = () => {
    // Perform logout logic

    // Assuming the logout is successful
    setLoggedIn(false);
    setUsername("");
    // Clear the stored data from local storage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("degree");
    localStorage.removeItem("id");
    navigate('/');
  };

  return (
    <>
      {/* <!-- Navbar Start --> */}

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-book-reader mr-3"></i>SMART TOGETHER
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/courses" className="nav-item nav-link ">
                Courses
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/coursedetail" className="dropdown-item">
                    Course Detail
                  </Link>
                  <Link to="/features" className="dropdown-item">
                    Our Features
                  </Link>
                  <Link to="/instructor" className="dropdown-item">
                    Instructors
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              <Link to="/newsget" className="nav-item nav-link">
                News
              </Link>
              <Link to="/feedbackget" className="nav-item nav-link">
                Feedbacks
              </Link>
            </div>
            {username !== "" || loggedIn ? (
              <>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle btn btn-primary py-2 px-2 d-none d-lg-block"
                    data-toggle="dropdown"
                  >
                    <h4>Welcome, {username}!</h4>
                  </Link>
                  <div className="dropdown-menu m-0">
                    {/* <div className="bg-danger">
                    {student.map((user) => (
                    
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          GetProfile(user._id);
                        }}
                        key={user._id}
                      >
                        Profile
                      </button>
                    ))}
                   
                    </div> */}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          GetProfile(localStorage.getItem("id"));
                        }}
                      
                      >
                        Profile
                      </button>

                    {/* <Link to="/profilegetstudent/:id" className="dropdown-item">
                      Profile
                    </Link> */}
                    <button
                      type="submit"
                      className="fw-bold btn btn-primary"
                      style={{ width: "60%", borderRadius: "10px" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle btn btn-primary py-2 px-4 d-none d-lg-block"
                    data-toggle="dropdown"
                  >
                    Sign Up
                  </Link>
                  <div className="dropdown-menu m-0">
                    <Link to="/signup/student" className="dropdown-item">
                      student Register
                    </Link>
                    <Link to="/signup/teacher" className="dropdown-item">
                      Teacher Register
                    </Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle btn btn-primary py-2 px-4 d-none d-lg-block"
                    data-toggle="dropdown"
                  >
                    Login
                  </Link>
                  <div className="dropdown-menu m-0">
                    <Link to="/loginstudent" className="dropdown-item">
                      Student Login
                    </Link>
                    <Link to="/loginteacher" className="dropdown-item">
                      Teacher Login
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Header;
