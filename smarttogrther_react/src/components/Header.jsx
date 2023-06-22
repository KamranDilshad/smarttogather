
import { Link } from "react-router-dom";
import InstructorComponent from "./InstructorsComponent";

const Header = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <Link to="/" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>SMART TOGETHER</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="about" className="nav-item nav-link">About</Link>
                            <Link to="courses" className="nav-item nav-link active">Courses</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0">
                                    <Link to="coursedetail" className="dropdown-item">Course Detail</Link>
                                    <Link to="features" className="dropdown-item">Our Features</Link>
                                    <Link to="instructor" className="dropdown-item">Instructors</Link>
                                    <Link to="testimonial" className="dropdown-item">Testimonial</Link>
                                </div>
                            </div>
                            <Link to="contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <Link to="signup " className="btn btn-primary py-2 px-4 d-none d-lg-block">Sign Up</Link>
                        <Link to="login " className="btn btn-primary py-2 px-4 mx-2 d-none d-lg-block">Login</Link>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}



        </>
    )

}

export default Header;