import React, { useState } from "react";
import { FaCaretSquareRight, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./Register.css";
import axios from "axios";

import { Link } from "react-router-dom";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("customer");
  console.log(type, "type");
  //const [gender, setGender] = useState("");

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "", 
    gender: "",
    password: "",
    subjects:[""]
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const userData = {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    gender: state.gender,
    subjects: state.subjects,
    password: state.password
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            "https://smartbackend-production.up.railway.app/api/students",
            userData
          );
          console.log(response.status, response.data);
        } catch (error) {
          console.error(error);
          // Display error message to the user or handle the error appropriately
        }
        
      };
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstname, setFirstName] = useState("");
  // const [isError, setIsError] = useState("");

  // using Async Await
  // const postLoginData = async () => {
  //   try {
  //     const res = await axios.post("/students");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };

  // // NOTE:  calling the function
  // useEffect(() => {
  //   postLoginData();
  // }, []);

  const handleCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };
  
  const handleAccountChange = (event) => {
    setType(event.target.value);
  };
  
  // const handleGenderChange = (event) => {
  //   setGender(event.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleNameChange = (e) => {
  //   setFirstName(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Perform login logic here with email and password
  //   console.log("Email:", email);
  //   console.log("Password:", password);

  //   // Reset form fields
  //   setEmail("");
  //   setPassword("");
  //   setFirstName("");
  // };
  return (
    <div className="container my-5  ">
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
              <form onSubmit={handleSubmit}>

              <div className="mt-1">
                <label htmlFor="fullName">First Name</label>
              </div>
              <div className="email-section">
                <FaUser className="env ms-n2 " />
                <input
                  className="form-control input-form "
                  type="firstName"
                  id="fullName"
                  name="firstName"
                  placeholder="Jhon"
                  value={state.firstName}
                  onChange={handleChange}
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
                  name="lastName"
                  placeholder="Doe"
                  value={state.lastName}
                  onChange={handleChange}
                  required
                />
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
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="emailsection mt-1">
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={state.gender}
                  onChange={handleChange}
                  required
                >
                 <option value="">Gender</option>

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
                      name="subjects"
                      id="businessCategory"
                      placeholder="Subject Name"
                      value={state.subjects}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* <div className="d-flex justify-content-between p-2 mt-1">
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
                  </div> */}
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
                      id="businessCategory"
                      name="subjects"
                      placeholder="Subject Name"
                      value={state.subjects}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="mt-1">
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
                  </div> */}
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
                  name="password"
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                   />
              </div>
              {/* <div className="password-section my-2 ">
                <FaLock className="env" />
                <input
                  className="form-control input-form"
                  type="password"
                  placeholder="confirm password"
                />
              </div> */}
              <p className="link mt-0">
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
              <div className="login-button mt-0 ">
                <button
                  type="submit"
                  className="fw-bold btn btn-primary"
                  style={{ width: "100%", borderRadius: "10px" }}
                >
                  Create My Account
                </button>
              </div>
              </form>
              <div>
                <p className="link mt-1">
                  <p className="my-3">Already have an account?</p>
                  <Link to="/login">
                  <button
                    className="fw-bold btn btn-warning "
                    style={{
                      width: "100%",
                      color: "white", 
                      borderRadius: "10px",
                    }}
                  >
                    Login
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

export default Register;
// import React, { useState } from "react";
// import { FaCaretSquareRight, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
// import "./Register.css";
// import axios from "axios";

// const Register = () => {
//   const [checked, setChecked] = useState(false);
//   const [type, setType] = useState("customer");

//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     gender: "",
//     password: "",
//     subjects: []
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userData = {
//       firstName: state.firstName,
//       lastName: state.lastName,
//       email: state.email,
//       gender: state.gender,
//       subjects: state.subjects,
//       password: state.password
//     };

//     try {
//       const response = await axios.post(
//         "https://smartbackend-production.up.railway.app/api/students",
//         userData
//       );
//       console.log(response.status, response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCheckboxChange = () => {
//     setChecked(!checked);
//   };

//   const handleAccountChange = (event) => {
//     setType(event.target.value);
//   };

//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow p-3 mb-5 bg-white rounded">
//             <h4 className="text-center">SignUp In A Few Simple Steps</h4>
//             <div className="email-section mt-1">
//               <select
//                 className="w-100 border border-dark rounded p-2 form-select"
//                 id="account"
//                 name="account"
//                 value={type}
//                 onChange={handleAccountChange}
//                 defaultValue={"customer"}
//               >
//                 <option value="customer">Student Account</option>
//                 <option value="business">Teacher Account</option>
//               </select>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="mt-1">
//                 <label htmlFor="fullName">First Name</label>
//               </div>
//               <div className="email-section">
//                 <FaUser className="env ms-n2" />
//                 <input
//                   className="form-control input-form"
//                   type="firstName"
//                   id="fullName"
//                   name="firstName"
//                   placeholder="Jhon"
//                   value={state.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mt-1">
//                 <label htmlFor="lastName">Last Name</label>
//               </div>
//               <div className="email-section">
//                 <FaUser className="env" />
//                 <input
//                   className="form-control input-form"
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Doe"
//                   value={state.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mt-1">
//                 <label htmlFor="email">Email Address</label>
//               </div>
//               <div className="email-section">
//                 <FaEnvelope className="env" />
//                 <input
//                   className="form-control input-form"
//                   id="email"
//                   name="email"
//                   placeholder="email"
//                   type="email"
//                   value={state.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="emailsection mt-1">
//                 <select
//                   className="form-select"
//                   id="gender"
//                   name="gender"
//                   value={state.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="gender">Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                 </select>
//               </div>
//               {type === "customer" ? (
//                 <>
//                   <div className="mt-1">
//                     <label htmlFor="businessCategory">Learn Subject</label>
//                   </div>
//                   <div className="password-section">
//                     <FaCaretSquareRight className="env" />
//                     <input
//                       className="form-control input-form"
//                       name="subjects"
//                       id="businessCategory"
//                       placeholder="Subject Name"
//                       value={state.subjects}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="mt-1">
//                     <label htmlFor="businessCategory">Teach Subject</label>
//                   </div>
//                   <div className="password-section">
//                     <FaCaretSquareRight className="env" />
//                     <input
//                       className="form-control input-form"
//                       id="businessCategory"
//                       name="subjects"
//                       placeholder="Subject Name"
//                       value={state.subjects}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </>
//               )}
//               <div className="mt-1">
//                 <label htmlFor="password">Password</label>
//               </div>
//               <div className="password-section">
//                 <FaLock className="env" />
//                 <input
//                   className="form-control input-form"
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="password"
//                   value={state.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <p className="link mt-0">
//                 <p>Forget Password?</p>
//                 <div>
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={checked}
//                       onChange={handleCheckboxChange}
//                     />
//                     Remember me
//                   </label>
//                 </div>
//               </p>
//               <div className="login-button mt-0">
//                 <button
//                   type="submit"
//                   className="fw-bold btn btn-primary"
//                   style={{ width: "100%", borderRadius: "10px" }}
//                 >
//                   Create My Account
//                 </button>
//               </div>
//             </form>
//             <div>
//               <p className="link mt-1">
//                 <p className="my-3">Already have an account?</p>
//                 <button
//                   className="fw-bold btn btn-warning"
//                   style={{
//                     width: "30%",
//                     color: "white",
//                     borderRadius: "10px"
//                   }}
//                 >
//                   Sign In
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
