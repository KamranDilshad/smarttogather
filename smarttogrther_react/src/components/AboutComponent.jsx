import { Link } from "react-router-dom";
const AboutComponent = () => {
    return (
        <>

            {/* <!-- Header Start --> */}
            <div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{ marginBottom: "90px" }}>
                <div className="container text-center py-5">
                    <h1 className="text-white display-1">About</h1>
                    <div className="d-inline-flex text-white mb-5">
                        <p className="m-0 text-uppercase"><Link className="text-white" href="">Home</Link></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">About</p>
                    </div>

                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- About Start --> */}
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
            {/* <!-- About End --> */}



        </>
    )

}

export default AboutComponent;