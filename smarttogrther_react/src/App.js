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
import Features from "./pages/Features";
import Testimonial from "./pages/Testimonial";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
           
      
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
        <Route path="signup" element={<Register />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
