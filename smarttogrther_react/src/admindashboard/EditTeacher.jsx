
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTeacher = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    subjects: "",
    degree:"",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/teachers/${id}`);
        const teacher = response.data.teacher;
        console.log("this is response", response);
        setData({
          firstname: teacher.firstname,
          lastname: teacher.lastname,
          email: teacher.email,
          gender: teacher.gender,
          password: teacher.password,
          subjects: teacher.subjects,
          degree:teacher.degree,
        });

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(data);
      console.log(id ,"this is ");
    const result= await axios.put(`http://localhost:8080/api/teachers/${id}`, data);
      console.log(result.data,"this is result");
      navigate("/teacher");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Update Teacher</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="firstname"
            placeholder="Enter First Name"
            autoComplete="off"
            onChange={handleChange}
            value={data.firstname}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="lastname"
            placeholder="Enter Last Name"
            autoComplete="off"
            onChange={handleChange}
            value={data.lastname}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="gender"
            placeholder="Gender"
            autoComplete="off"
            onChange={handleChange}
            value={data.gender}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Teach Subjects
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="subjects"
            placeholder="Subjects"
            autoComplete="off"
            onChange={handleChange}
            value={data.subjects}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="degree"
            placeholder="Subjects"
            autoComplete="off"
            onChange={handleChange}
            value={data.degree}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTeacher;

