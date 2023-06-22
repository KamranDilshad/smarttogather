
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const InstructorComponent = () => {
    return (
        <>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="section-title text-center position-relative mb-5">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Instructors</h6>
                        <h1 className="display-4">Top Rated Teachers</h1>
                    </div>
                    <div className="owl-carousel team-carousel position-relative" style={{ padding: "0 30px" }}>
                        <div className="team-item">
                            <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Dr Aqsa</h5>
                                <p className="mb-2">Chemistry</p>
                                <div className="d-flex justify-content-center">
                                    <Link className="text-white px-2" to="https://www.facebook.com/login/" target="_blank"> <FaFacebookF className="fab fa-facebook-f" /> </Link>
                                    <Link className="text-white px-2" to="https://twitter.com/i/flow/login" target="_blank"> <FaTwitter className="fab fa-twitter" /> </Link>
                                    <Link className="text-white px-2" to="https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="fab fa-linkedin-in" /> </Link>
                                    <Link className="text-white px-2" to="https://www.instagram.com/accounts/login/" target="_blank"> <FaInstagram className="fab fa-instagram" /> </Link>
                                    <Link className="text-white pl-2" to="https://www.youtube.com/" target="_blank"> <FaYoutube className="fab fa-youtube" /> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Ali Hassan</h5>
                                <p className="mb-2">Mathematics</p>
                                <div className="d-flex justify-content-center">
                                    <Link className="text-white px-2" to="https://www.facebook.com/login/" target="_blank"> <FaFacebookF className="fab fa-facebook-f" /> </Link>
                                    <Link className="text-white px-2" to="https://twitter.com/i/flow/login" target="_blank"> <FaTwitter className="fab fa-twitter" /> </Link>
                                    <Link className="text-white px-2" to="https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="fab fa-linkedin-in" /> </Link>
                                    <Link className="text-white px-2" to="https://www.instagram.com/accounts/login/" target="_blank"> <FaInstagram className="fab fa-instagram" /> </Link>
                                    <Link className="text-white pl-2" to="https://www.youtube.com/" target="_blank"> <FaYoutube className="fab fa-youtube" /> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Dr Natasha</h5>
                                <p className="mb-2">Web Design & Development</p>
                                <div className="d-flex justify-content-center">
                                    <Link className="text-white px-2" to="https://www.facebook.com/login/" target="_blank"> <FaFacebookF className="fab fa-facebook-f" /> </Link>
                                    <Link className="text-white px-2" to="https://twitter.com/i/flow/login" target="_blank"> <FaTwitter className="fab fa-twitter" /> </Link>
                                    <Link className="text-white px-2" to="https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="fab fa-linkedin-in" /> </Link>
                                    <Link className="text-white px-2" to="https://www.instagram.com/accounts/login/" target="_blank"> <FaInstagram className="fab fa-instagram" /> </Link>
                                    <Link className="text-white pl-2" to="https://www.youtube.com/" target="_blank"> <FaYoutube className="fab fa-youtube" /> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <img className="img-fluid w-100" src="assets/img/team-4.jpg" alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Mr M Haris</h5>
                                <p className="mb-2">Physics</p>
                                <div className="d-flex justify-content-center">
                                    <Link className="text-white px-2" to="https://www.facebook.com/login/" target="_blank"> <FaFacebookF className="fab fa-facebook-f" /> </Link>
                                    <Link className="text-white px-2" to="https://twitter.com/i/flow/login" target="_blank"> <FaTwitter className="fab fa-twitter" /> </Link>
                                    <Link className="text-white px-2" to="https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="fab fa-linkedin-in" /> </Link>
                                    <Link className="text-white px-2" to="https://www.instagram.com/accounts/login/" target="_blank"> <FaInstagram className="fab fa-instagram" /> </Link>
                                    <Link className="text-white pl-2" to="https://www.youtube.com/" target="_blank"> <FaYoutube className="fab fa-youtube" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}

export default InstructorComponent;