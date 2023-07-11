import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/news/${id}`
        );
        const news = response.data;
        console.log("checke", response.data);
        setData({
          title: news.title,
          description: news.description,
          image: news.image,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     console.log(data);
  //     console.log(id, "this is ");
  //     const result = await axios.put(
  //       `http://localhost:8080/api/news/${id}`,
  //       data
  //     );
  //     console.log(result.data, "this is result");
  //     navigate("/news");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('image', data.image);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      const result = await axios.put(
        `http://localhost:8080/api/news/${id}`,
        formData
      );
  
      console.log(result.data, "this is result");
      navigate("/news");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    if (event.target.name === 'image') {
      setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.files[0],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  };
  

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Update News</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={data.title}
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
        </div>
        {/* <div className="col-12">
          <label htmlFor="price" className="form-label">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            // value={data.image}
          />
        </div> */}
            <div className="col-12">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            
            onChange={handleChange}
            // value={data.image}
            required
          />
        </div>
        <div>
          <img src={data.image} alt="" width={200} height={200} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update News
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNews;
