import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";

const TeacherDetail = () => {
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/teachers/")
      .then((response) => setTeacher(response.data.teachers))
      .catch((error) => {
        console.log("Error Fetching Data", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <!-- Header Start --> */}
      <div
        className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-1">Teacher Detail</h1>
          <div className="d-inline-flex text-white mb-5">
            <p className="m-0 text-uppercase">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-angle-double-right pt-1 px-3"></i>
            <p className="m-0 text-uppercase">Teacher Detail</p>
          </div>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          ></div>
        </div>
      </div>
      {/* <!-- Header End -->

    <!-- Detail Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
              
                  <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                    Teacher Detail
                  </h6>
                  {/* {teacher.map((user)=>( */}
                    {/* <> */}
                        <h1 className="display-4">
                       {teacher.firstname}
                      </h1>
                      
                    <img
                      className="img-fluid rounded w-100 mb-4"
                      src="assets/img/header.jpg"
                      alt="Image"
                    />
                    <p>
                      Students learn how to critically evaluate website quality,
                      learn how to create and maintain quality web pages, learn
                      about web design standards and why they're important, and
                      learn to create and manipulate images. Web development is
                      everything involved in the creation of a website.{" "}
                    </p>
    
                    <p>
                      Typically, it refers to the coding and programming side of web
                      site production as opposed to the web design side. Benefits of
                      studying web development inclue, There is an ever increasing
                      demand for web developers: Businesses are always on a lookout
                      for good web developers and designers and the demand is only
                      going to grow in the future. .
                    </p>
                    {/* </> */}
                  {/* ))} */}
              
              </div>

              {/* slideeeeeeeer comonent start */}
              <h2 className="mb-3">Related Courses</h2>
              <Slider
                {...settings}
                className="related-carousel position-relative"
                style={{ padding: "0 30px" }}
              >
                <div className="courses-list-item position-relative d-block overflow-hidden mb-2">
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
                </div>

                <div className="courses-list-item position-relative d-block overflow-hidden mb-2">
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
                </div>

                <div className="courses-list-item position-relative d-block overflow-hidden mb-2">
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
                </div>
              </Slider>
              {/* =============================== */}
            </div>

            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="bg-primary mb-5 py-3">
                <h3 className="text-white py-3 px-4 m-0">Course Features</h3>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Instructor</h6>
                  <h6 className="text-white my-3">John Doe</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Rating</h6>
                  <h6 className="text-white my-3">
                    4.5 <small>(250)</small>
                  </h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Lectures</h6>
                  <h6 className="text-white my-3">15</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Duration</h6>
                  <h6 className="text-white my-3">10.00 Hrs</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Skill level</h6>
                  <h6 className="text-white my-3">All Level</h6>
                </div>
                <div className="d-flex justify-content-between px-4">
                  <h6 className="text-white my-3">Language</h6>
                  <h6 className="text-white my-3">English</h6>
                </div>
                <h5 className="text-white py-3 px-4 m-0">Course Price: $199</h5>
                <div className="py-3 px-4">
                  <a className="btn btn-block btn-secondary py-3 px-5" href="">
                    Enroll Now
                  </a>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="mb-3">Categories</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <a href="" className="text-decoration-none h6 m-0">
                      Web Design
                    </a>
                    <span className="badge badge-primary badge-pill">150</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <a href="" className="text-decoration-none h6 m-0">
                      Web Development
                    </a>
                    <span className="badge badge-primary badge-pill">131</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <a href="" className="text-decoration-none h6 m-0">
                      Online Marketing
                    </a>
                    <span className="badge badge-primary badge-pill">78</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <a href="" className="text-decoration-none h6 m-0">
                      Keyword Research
                    </a>
                    <span className="badge badge-primary badge-pill">56</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <a href="" className="text-decoration-none h6 m-0">
                      Email Marketing
                    </a>
                    <span className="badge badge-primary badge-pill">98</span>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2 className="mb-4">Recent Courses</h2>
                <a
                  className="d-flex align-items-center text-decoration-none mb-4"
                  href=""
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/courses-80x80.jpg"
                    alt=""
                  />
                  <div className="pl-3">
                    <h6>Web design & development courses for beginners</h6>
                    <div className="d-flex">
                      <small className="text-body mr-3">
                        <i className="fa fa-user text-primary mr-2"></i>Jhon Doe
                      </small>
                      <small className="text-body">
                        <i className="fa fa-star text-primary mr-2"></i>4.5
                        (250)
                      </small>
                    </div>
                  </div>
                </a>
                <a
                  className="d-flex align-items-center text-decoration-none mb-4"
                  href=""
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/courses-80x80.jpg"
                    alt=""
                  />
                  <div className="pl-3">
                    <h6>Web design & development courses for beginners</h6>
                    <div className="d-flex">
                      <small className="text-body mr-3">
                        <i className="fa fa-user text-primary mr-2"></i>Jhon Doe
                      </small>
                      <small className="text-body">
                        <i className="fa fa-star text-primary mr-2"></i>4.5
                        (250)
                      </small>
                    </div>
                  </div>
                </a>
                <a
                  className="d-flex align-items-center text-decoration-none mb-4"
                  href=""
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/courses-80x80.jpg"
                    alt=""
                  />
                  <div className="pl-3">
                    <h6>Web design & development courses for beginners</h6>
                    <div className="d-flex">
                      <small className="text-body mr-3">
                        <i className="fa fa-user text-primary mr-2"></i>Jhon Doe
                      </small>
                      <small className="text-body">
                        <i className="fa fa-star text-primary mr-2"></i>4.5
                        (250)
                      </small>
                    </div>
                  </div>
                </a>
                <a
                  className="d-flex align-items-center text-decoration-none"
                  href=""
                >
                  <img
                    className="img-fluid rounded"
                    src="assets/img/courses-80x80.jpg"
                    alt=""
                  />
                  <div className="pl-3">
                    <h6>Web design & development courses for beginners</h6>
                    <div className="d-flex">
                      <small className="text-body mr-3">
                        <i className="fa fa-user text-primary mr-2"></i>Jhon Doe
                      </small>
                      <small className="text-body">
                        <i className="fa fa-star text-primary mr-2"></i>4.5
                        (250)
                      </small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Detail End --> */}
    </>
  );
};

export default TeacherDetail;
