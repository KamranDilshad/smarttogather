import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Register.css";

const LoginComponent = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here with email and password
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <h5 className="text-center">Login</h5>
            <form onSubmit={handleSubmit}>
              <div className="email-section">
                <div className="mt-1">
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="email-section">
                  <FaEnvelope className="env" />
                  <input
                    className="form-control input-form"
                    id="email"
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-1">
                <label htmlFor="password">Password</label>
              </div>
              <div className="password-section">
                <FaLock className="env" />
                <input
                  className="form-control input-form"
                  id="password"
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
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
                  className="fw-bold btn btn-primary"
                  style={{ width: "100%", borderRadius: "10px" }}
                >
                  Login
                </button>
              </div>
              <div>
                <p className="link mt-1">
                  <p className="my-3">Already have an account?</p>
                  <button
                    className="fw-bold btn btn-warning"
                    style={{
                      width: "40%",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Create new Account
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
