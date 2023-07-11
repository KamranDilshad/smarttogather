import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!title || !description || !image) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Perform API integration
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      formData.append("image", image);

      const response = await fetch("http://localhost:8080/api/news/", {
        method: "POST",
        body: formData,
        
      });

      if (!response.ok) {
        throw new Error("Error posting news");
      }

      console.log("News posted successfully");
      // Reset form fields
      setTitle("");
      setDescription("");

      setImage(null);
      navigate("/news");
    } catch (error) {
      console.error("Error posting news:", error);
      setErrorMessage("An error occurred while posting the news");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="post-course">
      <h2>Post a News</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image: Click me </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <img src={image} alt="" width={200} height={200} />
        </div>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Post News</button>
      </form>
    </div>
  );
};

export default CreateNews;
