import React, { useState } from "react";
import { FaCaretSquareRight, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./Register.css";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("customer");
  console.log(type, "type");
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const handleAccountChange = (event) => {
    setType(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here with email and password
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form fields
    setEmail("");
    setPassword("");
    setFirstName("");
  };
  return (
    <div className="container my-5 w-50 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <h4 className="text-center ">SignUp In A Few Simple Steps</h4>
            {/* <div className="d-flex justify-content-around mt-1">
              <div className="social-icons-div">
                <img className="" src="./img/facebook.png" alt="" />
                <p>Facebook</p>
              </div>
              <div className="social-icons-div">
                <img className="" src="./img/google.png" alt="" />
                <p>Google</p>
              </div>
              <div className="social-icons-div">
                <img className="" src="./img/Apple.png" alt="" />
                <p>Apple</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-1">
              <p className="fw-bold">or</p>
            </div> */}
            <form onSubmit={handleSubmit}>
              <div className="email-section mt-1 ">
                <select
                  className="w-100 border border-dark rounded p-2 form-select"
                  id="account"
                  name="account"
                  value={type}
                  onChange={handleAccountChange}
                  defaultValue={"customer"}
                >
                  <option value="customer">Student Account</option>
                  <option value="business">Teacher Account</option>
                </select>
              </div>
              <div className="mt-1">
                <label htmlFor="fullName">First Name</label>
              </div>
              <div className="email-section">
                <FaUser className="env ms-n2 " />
                <input
                  className="form-control input-form "
                  type="firstname"
                  id="fullName"
                  placeholder="Jhon"
                  value={firstname}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="mt-1">
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="email-section">
                <FaUser className="env" />
                <input
                  className="form-control input-form"
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                />
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
              <div className="emailsection mt-1">
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <option value="gender">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {type === "customer" ? (
                <>
                  <div className="mt-1">
                    <label htmlFor="businessCategory">Learn Subject</label>
                  </div>
                  <div className="password-section">
                    <FaCaretSquareRight className="env" />
                    <input
                      className="form-control input-form"
                      type="password"
                      id="businessCategory"
                      placeholder="Subject Name"
                    />
                  </div>

                  <div className="d-flex justify-content-between p-2 mt-1">
                    <select
                      className="form-select  "
                      name="day"
                      id="day"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    >
                      <option value="">DD</option>
                      {Array.from({ length: 31 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-select"
                      name="month"
                      id="month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    >
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-select"
                      name="year"
                      id="year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option value="">YY</option>
                      {Array.from({ length: 24 }, (_, index) => (
                        <option key={index + 1990} value={index + 1990}>
                          {index + 1990}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-1">
                    <label htmlFor="businessCategory">Teach Subject</label>
                  </div>
                  <div className="password-section">
                    <FaCaretSquareRight className="env" />
                    <input
                      className="form-control input-form"
                      type="password"
                      id="businessCategory"
                      placeholder="Subject Name"
                    />
                  </div>
                  <div className="mt-1">
                    <label htmlFor="businessCategory">Degree</label>
                  </div>
                  <div className="password-section">
                    <FaCaretSquareRight className="env" />
                    <input
                      className="form-control input-form"
                      type="password"
                      id="businessCategory"
                      placeholder="Degree Name"
                    />
                  </div>
                </>
              )}
              <div className="mt-1">
                <label htmlFor="password">Password</label>
              </div>
              <div className="password-section">
                <FaLock className="env" />
                <input
                  className="form-control input-form"
                  type="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="password-section my-2 ">
                <FaLock className="env" />
                <input
                  className="form-control input-form"
                  type="password"
                  placeholder="confirm password"
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
                  Create My Account
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
                    Sign In
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

export default Register;
