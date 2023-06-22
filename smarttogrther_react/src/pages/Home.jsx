import React from "react";
import { Link } from "react-router-dom";
import CoursesComponent from "../components/CoursesComponent";
import InstructorComponent from "../components/InstructorsComponent";

import Topbar from "../components/Topbar";
import About from "./About";
import Courses from "./Courses";

const Home = () => {
    return (
        <>
           
                
                
                {/* <!-- Navbar Start --> */}


                <div className="container-fluid p-0">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                        <Link to="/" className="navbar-brand ml-lg-3">
                            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>Smart Together</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Find Tutors</Link>
                                <Link to="about" className="nav-item nav-link">Explore</Link>
                                <Link to="courses" className="nav-item nav-link">Notes</Link>
                            </div>
                            <a href="file:///C:/Users/UmarJutt/Desktop/online-education-website-template/online-education-website-template/login.html?" className="btn btn-primary py-2 px-4 d-none d-lg-block mx-1">Login</a>
                            <a href="file:///C:/Users/UmarJutt/Desktop/online-education-website-template/online-education-website-template/signup.html" className="btn btn-primary py-2 px-4 d-none d-lg-block">Signup</a>
                        </div>
                    </nav>
                </div>


                {/* <!-- Navbar End --> */}
                


                {/*<!-- Header Start --> */}
                <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{marginBottom: '90px'}} >
                    <div className="container text-center my-5 py-5">
                        <h1 className="text-white mt-4 mb-4">Find Teacher / Student For Free</h1>
                        <div className="mx-auto mb-5" style={{width: '100%', maxWidth: '600px'}} > 
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="true">Select</button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">Notes</Link>
                                        <Link className="dropdown-item" to="#">Counsellor</Link>
                                        <Link className="dropdown-item" to="#">Teacher</Link>
                                        <Link className="dropdown-item" to="#">Student</Link>
                                    </div>
                                </div>
                                <input type="text" className="form-control border-light" style={{padding: "30px 25px"}} placeholder="Location" />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary px-4 px-lg-5">Find</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header End --> */}

                {/* about section start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }} >
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="assets/img/about.jpg" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">About Us</h6>
                                <h1 className="display-5">Become involved in professional organizations</h1>
                            </div>
                            <p className="my-5">It's a simple three-step process where you sign up, choose a suitable subject matter expert and get a free demo from the tutor. Once you are satisfied, you can decide the price directly with your tutor. Our expert tutors are always ready to educate and teach students with a student-centered approach.Our content creation experts ensure high-quality education by producing well-structured lessons utilizing current industry standards, so all courses are up-to-date, relevant & useful</p>
                            <div className="row pt-3 mx-0">
                                <div className="col-3 px-0">
                                    <div className="bg-success text-center p-4">
                                        <h1 className="text-white" data-toggle="counter-up">123</h1>
                                        <h6 className="text-uppercase text-white">Available<span className="d-block">Subjects</span></h6>
                                    </div>
                                </div>
                                <div className="col-3 px-0">
                                    <div className="bg-primary text-center p-4">
                                        <h1 className="text-white" data-toggle="counter-up">1234</h1>
                                        <h6 className="text-uppercase text-white">Online<span className="d-block">Courses</span></h6>
                                    </div>
                                </div>
                                <div className="col-3 px-0">
                                    <div className="bg-warning text-center p-4">
                                        <h1 className="text-white" data-toggle="counter-up">1234</h1>
                                        <h6 className="text-uppercase text-white">Home<span className="d-block">Tutors</span></h6>
                                    </div>
                                </div>
                                <div className="col-3 px-0">
                                    <div className="bg-secondary text-center p-4">
                                        <h1 className="text-white" data-toggle="counter-up">123</h1>
                                        <h6 className="text-uppercase text-white">Skilled<span className="d-block">Instructors</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                {/* <!-- Feature Start --> */}
                <div className="container-fluid bg-image" style={{margin: "90px 0"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                                <div className="section-title position-relative mb-4">
                                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?</h6>
                                    <h1 className="display-4">Why You Should Start Learning with Us?</h1>
                                </div>
                                <p className="mb-4 pb-2">We offer a wide range of courses on various technologies that will help you gain practical knowledge. Whether a student or a teacher, the portal provides a seamless experience with expert tutors who offer timing flexibility in affordable packages.</p>
                                <div className="d-flex mb-3">
                                    <div className="btn-icon bg-primary mr-4">
                                        <i className="fa fa-2x fa-graduation-cap text-white"></i>
                                    </div>
                                    <div className="mt-n1">
                                        <h4>Skilled Instructors</h4>
                                        <p>Our dedicated, resourceful and goal-driven professional educators make sure the social and academic growth and development of every student with a solid commitment to learning.</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="btn-icon bg-secondary mr-4">
                                        <i className="fa fa-2x fa-certificate text-white"></i>
                                    </div>
                                    <div className="mt-n1">
                                        <h4>Verified Tutors</h4>
                                        <p>We thoroughly check the educational credentials & teaching experience of all tutors to get the best.</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="btn-icon bg-warning mr-4">
                                        <i className="fa fa-2x fa-book-reader text-white"></i>
                                    </div>
                                    <div className="mt-n1">
                                        <h4>Online Classes</h4>
                                        <p className="m-0">This portal aims to facilitate students with both learning methods as per their availability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5" style={{minHeight: "500px"}}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100" src="assets/img/feature.jpg" style={{objecFit: "cover"}} />
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
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                                <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 pb-4">
                            <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="detail.html">
                                <img className="img-fluid" src="assets/img/courses-1.jpg" alt="" />
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
                        </div>
                        <div className="col-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-lg justify-content-center mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link rounded-0" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link rounded-0" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
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
                                <div className="bg-light d-flex flex-column justify-content-center px-5" style={{height: "450px"}}>
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
                                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Need Help?</h6>
                                    <h1 className="display-4">Send Us A Message</h1>
                                </div>
                                <div className="contact-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Your Name" required="required" />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input type="email" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Your Email" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Subject" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control border-top-0 border-right-0 border-left-0 p-0" rows="5" placeholder="Message" required="required"></textarea>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}



                
            
        </>
    )
}

export default Home;