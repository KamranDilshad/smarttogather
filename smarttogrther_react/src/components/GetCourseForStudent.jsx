import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FeedbackPage.css";

const GetCourseForStudent = () => {
  const [course, setcourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
  const FunEdit = () => {
    navigate("/coursedetail");
  };

  if (loading) {
    return <p className="loading">Loading Course...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">New course are avaliable</h2>
      {course.length === 0 ? (
        <p>No New Courses available.</p>
      ) : (
        <ul className="feedback-list">
          {course.map((courses) => (
            <li className="feedback-item" key={courses.id}>
              <strong className="feedback-name"> Title: {courses.title}</strong>
              ,
              <br />
              <span className="feedback-email">

                <strong> Description: </strong> {courses.description}
              </span>
              <br />
              <span className="feedback-email">
                <strong> Price: </strong> ({courses.price})
              </span>
              <br />
              {/* <span className="feedback-message">{courses.image}</span> */}
              <div>
                <img src={courses.image} alt="" width={200} height={200} />
              </div>
              <div class="col-md-12 bg-light text-right">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  FunEdit();
                }}
              >
                Enroll Now
              </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetCourseForStudent;
