import {   FaGraduationCap, FaBookReader, FaCertificate } from "react-icons/fa";

const FeaturesComponents = () => {
    return (
        <>

            {/* <!-- Header Start --> */}
            <div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{marginBottom: "90px"}} >
                <div className="container text-center py-5">
                    <h1 className="text-white display-1">Features</h1>
                    <div className="d-inline-flex text-white mb-5">
                        <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Features</p>
                    </div>
                    {/* <div className="mx-auto mb-5" style="width: 100%; max-width: 600px;">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Courses</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Courses 1</a>
                                    <a className="dropdown-item" href="#">Courses 2</a>
                                    <a className="dropdown-item" href="#">Courses 3</a>
                                </div>
                            </div>
                            <input type="text" className="form-control border-light" style="padding: 30px 25px;" placeholder="Keyword">
                                <div className="input-group-append">
                                    <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                                </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- Header End -->


            <!-- Feature Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?</h6>
                                <h1 className="display-4">Why You Should Start Learning with Us?</h1>
                            </div>
                            <p className="mb-4 pb-2">We offer a wide range of courses on various technologies that will help you gain practical knowledge. Whether a student or a teacher, the portal provides a seamless experience with expert tutors who offer timing flexibility in affordable packages.</p>
                            <div className="d-flex mb-3">
                                <div className="btn-icon bg-primary mr-4"> <FaGraduationCap className="fa fa-2x fa-graduation-cap text-white" /> </div>
                                                                           

                                <div className="mt-n1">
                                    <h4>Skilled Instructors</h4>
                                    <p>Our dedicated, resourceful and goal-driven professional educators make sure the social and academic growth and development of every student with a solid commitment to learning.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="btn-icon bg-secondary mr-4"> <FaCertificate className="fa fa-2x fa-certificate text-white" /> </div>
                                <div className="mt-n1">
                                    <h4>International Certificate</h4>
                                    <p>We thoroughly check the educational credentials & teaching experience of all tutors to get the best.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="btn-icon bg-warning mr-4"> <FaBookReader className="fa fa-2x fa-book-reader text-white" /> </div>
                                <div className="mt-n1">
                                    <h4>Online Classes</h4>
                                    <p className="m-0">This portal aims to facilitate students with both learning methods as per their availability.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" style={{minHeight: "500px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="assets/img/feature.jpg" style={{objectFit: "cover"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature Start --> */}


        </>
    )

}

export default FeaturesComponents;