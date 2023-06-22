import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () =>{
    return(
        <>
                            {/* <!-- Footer Start --> */}
                            <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{marginTop: "90px"}}>
                    <div className="container mt-5 pt-5">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <a to="index.html" className="navbar-brand">
                                    <h1 className="mt-n2 text-uppercase text-white"><i className="fa fa-book-reader mr-3"></i>Smart Together</h1>
                                </a>
                                <p className="m-0">SmartTogether is a free website, trusted by thousands of students and teachers, all over the Pakistan.
                                    You can find local tutors, online teachers, and teachers to help with tutoring, counselling, assignments, academic notes from experts.
                                </p>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h3 className="text-white mb-4">Newsletter</h3>
                                <div className="w-100">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-light" style={{padding: "30px"}} placeholder="Your Email Address" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary px-4">Subscribe</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">For Students</h3>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Improve Learning</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Stay Safe</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Refer and Earn Points</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Report a Problem FAQs</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>How it Work</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Pay Teachers</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">For Teachers</h3>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Offer Services</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Offer Notes</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Get Paid</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Report a Problem</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>How to Build Profile</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Approaching Students</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Ranking Criteria</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Share Success Study</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">Help and Feedback</h3>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Privacy Policy</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Terms & Condition</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Trial Policy</a>
                                    <a className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Feedback</a>
                                    <a className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{borderColor: "rgba(256, 256, 256, .1) !important "}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                                <p className="m-0">Copyright &copy; <a className="text-white" to="#">Smart Together</a>. All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="d-flex justify-content-end">
                                <Link className="text-white px-2" to="https://www.facebook.com/login/" target="_blank"> <FaFacebookF className="fab fa-facebook-f" /> </Link>
                                <Link className="text-white px-2" to="https://twitter.com/i/flow/login" target="_blank"> <FaTwitter className="fab fa-twitter" /> </Link>
                                <Link className="text-white px-2" to="https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="fab fa-linkedin-in" /> </Link>
                                <Link className="text-white px-2" to="https://www.instagram.com/accounts/login/" target="_blank"> <FaInstagram className="fab fa-instagram" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a to="#" className="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>

  
       
        
        
        </>
    )

}

export default Footer