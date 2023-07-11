import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseHeaderComponent from "./CourseHeaderComponent";
import PostCourse from "./PostCourses";
import GetCourseForStudent from "./GetCourseForStudent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CoursesComponent = () => {
    const [course, setcourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      fetchFeedbacks();
    }, []);
  
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/course/");
        setcourse(response.data.courses);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const search = (course) => {
        return course.filter((item) => item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) || item.price.toString().includes(query)
        );
      };
console.log("this is query", query);

    return (
        <>

        
            {/* <CourseHeaderComponent /> */}
            <>

{/* <!-- course Header Start --> */}
<div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{marginBottom: "90px"}}>
    <div className="container text-center py-5">
        <h1 className="text-white display-1">Courses</h1>
        <div className="d-inline-flex text-white mb-5">
            <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
            <i className="fa fa-angle-double-right pt-1 px-3"></i>
            <p className="m-0 text-uppercase">Courses</p>
        </div>
        <div className="mx-auto mb-5" style={{width: "100%", maxWidth: "600px"}}>
            <div className="input-group">
                {/* <div className="input-group-prepend">
                    <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Courses</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Courses 1</a>
                        <a className="dropdown-item" href="#">Courses 2</a>
                        <a className="dropdown-item" href="#">Courses 3</a>
                    </div>
                </div> */}
                <input type="text" className="form-control border-light" style={{padding: "30px 25px"}} placeholder="Keyword"
                  onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                <div className="input-group-append">
                    <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- course Header End --> */}





</>
        
            {localStorage.getItem("degree") ? <PostCourse/> :   <>
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
                        {course && search(course)?.map((course)=>(
                            // console.log(course);
                             
                              <div className="col-lg-4 col-md-6 pb-4" key={course.id}>
                              <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to="/courses/coursedetail">
                              {/* <Link to="coursedetail" className="dropdown-item">Course Detail</Link> */}
                                  <img className="img-fluid  " src={course.image} alt="" />
                                  <div className="courses-text">
                                      <h4 className="text-center text-white px-3">{course.description}
                                          </h4>
                                      <div className="border-top w-100 mt-3">
                                          <div className="d-flex justify-content-between p-4">
                                              <span className="text-white"><i className="fa fa-user mr-2"></i>{course.title}</span>
                                           <span className="text-white"><i className="fa fa-star mr-2"></i>
                                                  <small>Price: {course.price}</small></span>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          </div>
                       ) )}
                      
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
            </> }
            {/* {!localStorage.getItem("degree") && <GetCourseForStudent/>} */}

            {/* <!-- Courses Start --> */}
         
            {/* <!-- Courses End --> */}
            




        </>
    )

}

export default CoursesComponent;