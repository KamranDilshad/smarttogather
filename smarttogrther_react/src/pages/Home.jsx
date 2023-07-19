import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CoursesComponent from "../components/CoursesComponent";
import InstructorComponent from "../components/InstructorsComponent";
import axios from "axios";
import download from "../components/download.png";
import teacherimage from "./icons8-team-FcLyt7lW5wg-unsplash.jpg";
import Topbar from "../components/Topbar";
import About from "./About";
import Courses from "./Courses";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/teachers/");
      setTeacher(response.data.teachers);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const search = (teacher) => {
    return teacher.filter(
      (item) =>
        item.firstname.toLowerCase().includes(query) ||
        item.lastname.toLowerCase().includes(query) ||
        item.degree.includes(query)
    );
  };
  const handleClick = (teacher) => {
    navigate("/teacherDetail", {
      state: {
        item: teacher,
      },
    });
  };
  console.log("this is query", query);
  return (
    <>
      {/*<!-- Header Start --> */}
      <div
        className="jumbotron jumbotron-fluid position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center my-5 py-5">
          <h1 className="text-white mt-4 mb-4">Find Teacher For Free</h1>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="input-group">
              {/* <div className="input-group-prepend">
                                    <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="true">Select</button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Notes</Link>
                                        <Link className="dropdown-item" to="#">Counsellor</Link>
                                        <Link className="dropdown-item" to="#">Teacher</Link>
                                        <Link className="dropdown-item" to="#">Student</Link>
                                    </div>
                                </div> */}
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px 25px" }}
                placeholder="Search Teacher"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary px-4 px-lg-5">Find</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
     Get Teacher Section  */}
     

      <div className="container-fluid ">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Our Teachers
                </h6>
                <h1 className="display-4">Top Rated Teachers</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {teacher &&
              search(teacher)?.map((teacher) => {
                console.log(teacher, "teachersss");
                return (
                  <div
                    className="col-lg-3 col-md-6 col-sm-12 pb-4"
                    key={teacher.id}
                  >
                    <div
                      className="courses-list-item position-relative d-block overflow-hidden mb-2"
                      onClick={() => handleClick(teacher)}
                    >
                      <img
                        className="img-fluid rounded mx-auto d-block "
                        src={teacherimage}
                        alt=""
                        width={400}
                        height={100}
                      />
                      <div className="  text-center p-4">
                        <h4 className="mb-1">
                          {teacher.firstname} {teacher.lastname}
                        </h4>
                        <p className="mb-2"> Degree: {teacher.degree} </p>
                        <div className="d-flex justify-content-center">
                          <Link
                            className="text-black px-2"
                            to="https://www.facebook.com/login/"
                            target="_blank"
                          >
                            {" "}
                            <FaFacebookF className="fab fa-facebook-f" />{" "}
                          </Link>
                          <Link
                            className="text-black px-2"
                            to="https://twitter.com/i/flow/login"
                            target="_blank"
                          >
                            {" "}
                            <FaTwitter className="fab fa-twitter" />{" "}
                          </Link>
                          <Link
                            className="text-black px-2"
                            to="https://www.linkedin.com/login"
                            target="_blank"
                          >
                            {" "}
                            <FaLinkedin className="fab fa-linkedin-in" />{" "}
                          </Link>
                          <Link
                            className="text-black px-2"
                            to="https://www.instagram.com/accounts/login/"
                            target="_blank"
                          >
                            {" "}
                            <FaInstagram className="fab fa-instagram" />{" "}
                          </Link>
                          <Link
                            className="text-black pl-2"
                            to="https://www.youtube.com/"
                            target="_blank"
                          >
                            {" "}
                            <FaYoutube className="fab fa-youtube" />{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* <div className="col-lg-4 col-md-6 pb-4">
                            <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="detail.html">
                                <img className="img-fluid" src="assets/img/courses-2.jpg" alt="" />
                                <div className="courses-text">
                                    <h4 className="text-center text-white px-3">Web design & development courses for
                                        beginners</h4>
                                    <div className="border-top w-100 mt-3">
                                        <div className="d-flex justify-content-between p-4">
                                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                <small>(250)</small></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-4">
                            <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="detail.html">
                           
                                <img className="img-fluid" src="assets/img/courses-3.jpg" alt="" />
                                <div className="courses-text">
                                    <h4 className="text-center text-white px-3">Web design & development courses for
                                        beginners</h4>
                                    <div className="border-top w-100 mt-3">
                                        <div className="d-flex justify-content-between p-4">
                                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                <small>(250)</small></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-4">
                            <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="detail.html">
                                <img className="img-fluid" src="assets/img/courses-4.jpg" alt="" />
                                <div className="courses-text">
                                    <h4 className="text-center text-white px-3">Web design & development courses for
                                        beginners</h4>
                                    <div className="border-top w-100 mt-3">
                                        <div className="d-flex justify-content-between p-4">
                                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                <small>(250)</small></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-4">
                            <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="detail.html">
                                <img className="img-fluid" src="assets/img/courses-5.jpg" alt="" />
                                <div className="courses-text">
                                    <h4 className="text-center text-white px-3">Web design & development courses for
                                        beginners</h4>
                                    <div className="border-top w-100 mt-3">
                                        <div className="d-flex justify-content-between p-4">
                                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                <small>(250)</small></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-4">
                            <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="detail.html">
                                <img className="img-fluid" src="assets/img/courses-6.jpg" alt="" />
                                <div className="courses-text">
                                    <h4 className="text-center text-white px-3">Web design & development courses for
                                        beginners</h4>
                                    <div className="border-top w-100 mt-3">
                                        <div className="d-flex justify-content-between p-4">
                                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                <small>(250)</small></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div> */}
            {/* <div className="col-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-lg justify-content-center mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link rounded-0" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" to="#">1</a></li>
                                    <li className="page-item"><a className="page-link" to="#">2</a></li>
                                    <li className="page-item"><a className="page-link" to="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link rounded-0" to="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* about section start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="assets/img/about.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  About Us
                </h6>
                <h1 className="display-5">
                  Become involved in professional organizations
                </h1>
              </div>
              <p className="my-5">
                It's a simple three-step process where you sign up, choose a
                suitable subject matter expert and get a free demo from the
                tutor. Once you are satisfied, you can decide the price directly
                with your tutor. Our expert tutors are always ready to educate
                and teach students with a student-centered approach.Our content
                creation experts ensure high-quality education by producing
                well-structured lessons utilizing current industry standards, so
                all courses are up-to-date, relevant & useful
              </p>
              <div className="row pt-3 mx-0">
                <div className="col-3 px-0">
                  <div className="bg-success text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Available<span className="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-primary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Online<span className="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-warning text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Home<span className="d-block">Tutors</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-secondary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Skilled<span className="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Feature Start --> */}
      <div className="container-fluid bg-image" style={{ margin: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 my-5 pt-5 pb-lg-5">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Why Choose Us?
                </h6>
                <h1 className="display-4">
                  Why You Should Start Learning with Us?
                </h1>
              </div>
              <p className="mb-4 pb-2">
                We offer a wide range of courses on various technologies that
                will help you gain practical knowledge. Whether a student or a
                teacher, the portal provides a seamless experience with expert
                tutors who offer timing flexibility in affordable packages.
              </p>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-primary mr-4">
                  <i className="fa fa-2x fa-graduation-cap text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Skilled Instructors</h4>
                  <p>
                    Our dedicated, resourceful and goal-driven professional
                    educators make sure the social and academic growth and
                    development of every student with a solid commitment to
                    learning.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-secondary mr-4">
                  <i className="fa fa-2x fa-certificate text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Verified Tutors</h4>
                  <p>
                    We thoroughly check the educational credentials & teaching
                    experience of all tutors to get the best.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="btn-icon bg-warning mr-4">
                  <i className="fa fa-2x fa-book-reader text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Online Classes</h4>
                  <p className="m-0">
                    This portal aims to facilitate students with both learning
                    methods as per their availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="assets/img/feature.jpg"
                  style={{ objecFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Start --> */}

      {/* <!-- Courses Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Our Courses
                </h6>
                <h1 className="display-4">
                  Checkout New Releases Of Our Courses
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-4">
              <a
                className="courses-list-item position-relative d-block overflow-hidden mb-2"
                href="detail.html"
              >
                <img
                  className="img-fluid"
                  src="assets/img/courses-1.jpg"
                  alt=""
                />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">
                    Web design & development courses for beginners
                  </h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-user mr-2"></i>Jhon Doe
                      </span>
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5
                        <small>(250)</small>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <a
                className="courses-list-item position-relative d-block overflow-hidden mb-2"
                href="detail.html"
              >
                <img
                  className="img-fluid"
                  src="assets/img/courses-2.jpg"
                  alt=""
                />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">
                    Web design & development courses for beginners
                  </h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-user mr-2"></i>Jhon Doe
                      </span>
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5
                        <small>(250)</small>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <a
                className="courses-list-item position-relative d-block overflow-hidden mb-2"
                href="detail.html"
              >
                <img
                  className="img-fluid"
                  src="assets/img/courses-3.jpg"
                  alt=""
                />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">
                    Web design & development courses for beginners
                  </h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-user mr-2"></i>Jhon Doe
                      </span>
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5
                        <small>(250)</small>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <a
                className="courses-list-item position-relative d-block overflow-hidden mb-2"
                href="detail.html"
              >
                <img
                  className="img-fluid"
                  src="assets/img/courses-4.jpg"
                  alt=""
                />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">
                    Web design & development courses for beginners
                  </h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-user mr-2"></i>Jhon Doe
                      </span>
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5
                        <small>(250)</small>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <a
                className="courses-list-item position-relative d-block overflow-hidden mb-2"
                href="detail.html"
              >
                <img
                  className="img-fluid"
                  src="assets/img/courses-5.jpg"
                  alt=""
                />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">
                    Web design & development courses for beginners
                  </h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-user mr-2"></i>Jhon Doe
                      </span>
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5
                        <small>(250)</small>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <a
                className="courses-list-item position-relative d-block overflow-hidden mb-2"
                href="detail.html"
              >
                <img
                  className="img-fluid"
                  src="assets/img/courses-6.jpg"
                  alt=""
                />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">
                    Web design & development courses for beginners
                  </h4>
                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">
                        <i className="fa fa-user mr-2"></i>Jhon Doe
                      </span>
                      <span className="text-white">
                        <i className="fa fa-star mr-2"></i>4.5
                        <small>(250)</small>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a
                      className="page-link rounded-0"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link rounded-0"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Courses End --> */}

      {/* <!-- Team Start --> */}
      <InstructorComponent />
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div
                className="bg-light d-flex flex-column justify-content-center px-5"
                style={{ height: "450px" }}
              >
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Our Location</h4>
                    <p className="m-0">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-phone-alt text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Call Us</h4>
                    <p className="m-0">+012 345 6789</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-envelope text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Email Us</h4>
                    <p className="m-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Need Help?
                </h6>
                <h1 className="display-4">Send Us A Message</h1>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Home;
