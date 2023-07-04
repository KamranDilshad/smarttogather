import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import {
  FaBook,
  FaChalkboardTeacher,
  FaDashcube,
  FaEnvelope,
  FaGraduationCap,
  FaLayerGroup,
  FaProjectDiagram,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import "./dashbord.css";

import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [users, setUsers] = useState([]);
  const [feedback, setFeedback] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetchProfiles();
    fetchCourses();
    fetchNewsUpdates();
    fetchUsers();
    fetchFeedback();
  }, []);

  // Fetch user profiles pending verification
  const fetchProfiles = async () => {
    try {
      const response = await fetch("/api/profiles/pending");
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  // Fetch courses
  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch news updates
  const fetchNewsUpdates = async () => {
    try {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNewsUpdates(data);
    } catch (error) {
      console.error("Error fetching news updates:", error);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch feedback
  const fetchFeedback = async () => {
    try {
      const response = await fetch("/api/feedback");
      const data = await response.json();
      setFeedback(data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Approve profile
  const approveProfile = async (profileId) => {
    try {
      await fetch(`/api/profiles/${profileId}/approve`, {
        method: "PUT",
      });
      // Refresh the profile list
      fetchProfiles();
    } catch (error) {
      console.error("Error approving profile:", error);
    }
  };

  // Remove course
  const removeCourse = async (courseId) => {
    try {
      await fetch(`/api/courses/${courseId}`, {
        method: "DELETE",
      });
      // Refresh the course list
      fetchCourses();
    } catch (error) {
      console.error("Error removing course:", error);
    }
  };

  // Remove news update
  const removeNewsUpdate = async (newsId) => {
    try {
      await fetch(`/api/news/${newsId}`, {
        method: "DELETE",
      });
      // Refresh the news update list
      fetchNewsUpdates();
    } catch (error) {
      console.error("Error removing news update:", error);
    }
  };

  // Block user
  const blockUser = async (userId) => {
    try {
      await fetch(`/api/users/${userId}/block`, {
        method: "PUT",
      });
      // Refresh the user list
      fetchUsers();
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };

  // Delete feedback
  const deleteFeedback = async (feedbackId) => {
    try {
      await fetch(`/api/feedback/${feedbackId}`, {
        method: "DELETE",
      });
      // Refresh the feedback list
      fetchFeedback();
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex px-0 row mx-auto">
        <div className="col-2 bg-dark px-0">
          <div className="" style={{ height: "100vh" }}>
            <nav className=" px-2 flex-column">
              <Link to="/" className="navbar-brand d-block ">
                <span className="text-uppercase text-white  ">
                  SMART TOGETHER
                </span>
              </Link>

              <div className="container d-block link-style ">
                <Link to="/" className="nav-item nav-link py-3 text-white ">
                  <FaDashcube /> <span className="px-2">Dashboard</span>
                </Link>
                <Link to="about" className="nav-item nav-link py-3 text-white">
                  <FaUsers /> <span className="px-2">Students</span>
                </Link>
                <Link
                  to="courses"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaChalkboardTeacher />
                  <span className="px-2">Teacher</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaLayerGroup />
                  <span className="px-2">Groups</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaProjectDiagram /> <span className="px-2">Projects</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <span className="px-2">Created Matrial</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <FaGraduationCap />
                  <span className="px-2">Grading</span>
                </Link>
                <Link
                  to="contact"
                  className="nav-item nav-link py-3 text-white"
                >
                  <span className="px-2">Quiz</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="col-10 py-4  bg-light">
          <div className="continer-fluid d-flex">
            <form class="d-flex" role="search">
              <input
                class="form-control text-black "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>

            <span className="px-3">
              <FaEnvelope />
            </span>
          <span>smarttogater@gmail.com</span>
          </div>
          <div className="py-3">
            <h1>Dashboard</h1>
          </div>
          {/* Card Section */}
          <div className="conitainer d-flex  justify-content-around">
            <div class="card" style={{ width: "12rem", height: "12rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3 " />
                </IconContext.Provider>
                <p>Total Users</p>
                <h2>2002</h2>
              </div>
            </div>
            <div class="card" style={{ width: "12rem", height: "12rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Student</p>
                <h2>1600</h2>
              </div>
            </div>
            <div class="card" style={{ width: "12rem", height: "12rem" }}>
              <div class="card-body">
                <IconContext.Provider value={{ size: 45 }}>
                  <FaUser className="mb-3 mt-3" />
                </IconContext.Provider>
                <p>Total Teacher</p>
                <h2>202</h2>
              </div>
            </div>
          </div>
          <h2 className="mt-4">Verify Profile</h2>
          <ul>
            {profiles.map((profile) => (
              <li key={profile.id}>
                {profile.name} - {profile.email}
                <button onClick={() => approveProfile(profile.id)}>
                  Approve
                </button>
              </li>
            ))}
          </ul>

          {/* Manage courses */}
          <h2>Manage Courses</h2>
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                {course.name} - {course.description}
                <button onClick={() => removeCourse(course.id)}>Remove</button>
              </li>
            ))}
          </ul>

          {/* Manage news updates */}
          <h2>Manage News Updates</h2>
          <ul>
            {newsUpdates.map((news) => (
              <li key={news.id}>
                {news.title} - {news.content}
                <button onClick={() => removeNewsUpdate(news.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Block users */}
          <h2>Block Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
                <button onClick={() => blockUser(user.id)}>Block</button>
              </li>
            ))}
          </ul>

          {/* Manage feedback */}
          <h2>Manage Feedback</h2>
          <ul>
            {feedback.map((item) => (
              <li key={item.id}>
                {item.message} - {item.user}
                <button onClick={() => deleteFeedback(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
