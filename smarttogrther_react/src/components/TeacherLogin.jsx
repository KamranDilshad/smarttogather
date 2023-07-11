import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Register.css";
import axios from "axios";

const TeacherLogin = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   // Check if user is already logged in using local storage
  //   const storedLoggedIn = localStorage.getItem("loggedIn");
  //   const storedUsername = localStorage.getItem("username");
  //   if (storedLoggedIn && storedUsername) {
  //     setLoggedIn(true);
  //     setUsername(storedUsername);
  //   }
  // }, []);

  // const handleLogout = () => {
  //   // Perform logout logic

  //   // Assuming the logout is successful
  //   setLoggedIn(false);
  //   setUsername("");
  //   // Clear the stored data from local storage
  //   localStorage.removeItem("loggedIn");
  //   localStorage.removeItem("username");
  // };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8080/api/teachers/login", userData)
      .then((response) => {
        console.log(response);
        // setLoggedIn(true);
        // setUsername(response.data.student.firstName);
        // Store the logged-in state and username in local storage
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.teacher.firstname);
        localStorage.setItem("degree", response.data.teacher.degree);
        console.log("this is log",response.data.teacher.firstname);
        if(response.status === 200){
        
          navigate("/");
          console.log('somthing');
            window.location.reload();
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  // if (loggedIn) {
  //   return (
  //     <div>
  //       <p>Welcome, {username}!</p>
     
  //     </div>
  //   );
  // }

  return (
    <div className="container my-5 w-50  ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <h3 className="text-center">Login as a Teacher</h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-1">
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="email-section">
                <FaEnvelope className="env" />
                <input
                  className="form-control input-form"
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-1">
                <label htmlFor="password">Password</label>
              </div>
              <div className="password-section">
                <FaLock className="env" />
                <input
                  className="form-control input-form"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <p className="link mt-1">
                <p>Forget Password?</p>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={handleCheckboxChange}
                    />
                    Remember me
                  </label>
                </div>
              </p>
              <div className="login-button ">
                <button
                  type="submit"
                  className="fw-bold btn btn-primary"
                  style={{ width: "100%", borderRadius: "10px" }}
                >
                  Login
                </button>
              </div>
            </form>
            {/* <div>
              <p className="link mt-0">
                <Link to="/signup">
                  <button
                    className="fw-bold btn btn-warning"
                    style={{
                      width: "160%",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Create new Account
                  </button>
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
