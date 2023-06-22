import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Topbar = () =>{
    return(
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark">
                    <div className="row py-2 px-lg-5">
                        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center text-white">
                                <small><FaPhone className="phone icon" /> +012 345 6789</small>
                                <small className="px-3">|</small>
                                <small><FaEnvelope className="fa fa-envelope mr-2" />info@example.com</small>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <Link className="text-white px-2" to="https://www.facebook.com/login/" target="_blank"> <FaFacebookF className="fab fa-facebook-f" /> </Link>
                                <Link className="text-white px-2" to="https://twitter.com/i/flow/login" target="_blank"> <FaTwitter className="fab fa-twitter" /> </Link>
                                <Link className="text-white px-2" to="https://www.linkedin.com/login" target="_blank"> <FaLinkedin className="fab fa-linkedin-in" /> </Link>
                                <Link className="text-white px-2" to="https://www.instagram.com/accounts/login/" target="_blank"> <FaInstagram className="fab fa-instagram" /> </Link>
                                <Link className="text-white pl-2" to="https://www.youtube.com/" target="_blank"> <FaYoutube className="fab fa-youtube" /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Topbar End --> */}   
       
        
        
        </>
    )

}

export default Topbar