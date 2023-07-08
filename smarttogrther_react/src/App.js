import About from "./pages/About";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Instructor from "./pages/Instructor";
import CourseDetail from "./pages/CourseDetail";
import Testimonial from "./pages/Testimonial";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";
import FeedbackPopup from "./components/FeedBackForm";
import TeacherRegister from "./components/TeacherRegister";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <FeedbackPopup/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="pages" element={<Pages />} />
        <Route path="contact" element={<Contact />} />
        <Route path="instructor" element={<Instructor />} />
        <Route path="coursedetail" element={<CourseDetail />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="/courses/coursedetail" element={<CourseDetail />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="signup/student" element={<Register />} />
        <Route path="signup/teacher" element={<TeacherRegister  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
