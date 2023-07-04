import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Register.css";
import axios from "axios";
const LoginComponent = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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
      .post(
        "https://smartbackend-production.up.railway.app/api/students/login",
        userData
      )
      .then((response) => {
        console.log(response);
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

  return (
    <div className="container my-5 w-50  ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <h3 className="text-center">Login</h3>
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
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
