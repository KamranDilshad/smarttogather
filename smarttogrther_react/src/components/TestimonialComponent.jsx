const TestimonialComponents = () => {
    return (
        <>



            {/* <!-- Header Start --> */}
            <div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{marginBottom: "90px"}} >
                <div className="container text-center py-5">
                    <h1 className="text-white display-1">Testimonial</h1>
                    <div className="d-inline-flex text-white mb-5">
                        <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Testimonial</p>
                    </div>
                    <div className="mx-auto mb-5" style={{width: "100%", maxWidth: "600px"}}>
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
                            <input type="text" className="form-control border-light" style={{padding: "30px 25px"}} placeholder="Keyword" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End -->


            <!-- Testimonial Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Testimonial</h6>
                                <h1 className="display-4">What Say Our Students</h1>
                            </div>
                            <p className="m-0">I have learned so much in my classes with John. He paces the class just right so you feel challenged but not overwhelmed. So many other classes you just read from a text book but in his classes asks questions and gets the students to respond which is both fun and promotes faster learning. He is patient and eager to help. I am thrilled to have found his class</p>
                        </div>
                        <div className="col-lg-7">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="bg-light p-5">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <p>I have been learning Operations from David�this summer and it has been a great experience. He is a very thoughtful teacher who puts a lot of thought into how he/she presents the material. His/Her lessons were engaging, useful, and he was very patient with everyone in class always encouraging his students to try. I would highly recommend himto anyone interested in learning operations.
                                    </p>
                                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                        <img className="img-fluid mr-4" src="assets/img/testimonial-2.jpg" alt="" />
                                            <div>
                                                <h5>Aliyan </h5>
                                                <span>Operation Research</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="bg-light p-5">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <p> Smith has an incredible gift for teaching. Her/His classes seem like play but there is a lot of serious learning going on. I was already an intermediate, but I learned something from every class, plus had a lot of fun doing it!</p>
                                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                        <img className="img-fluid mr-4" src="assets/img/testimonial-1.jpg" alt="" />
                                            <div>
                                                <h5>Sushmita</h5>
                                                <span>Web Design</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial Start --> */}
        </>
    )
}

export default TestimonialComponents;