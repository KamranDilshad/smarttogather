import React, { useState } from 'react';
import './postcourse.css';

const PostCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
 
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!title || !description || !price  || !image) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Perform API integration
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
     formData.append('image', image);

      const response = await fetch('https://example.com/api/courses', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error posting course');
      }

      console.log('Course posted successfully');
      // Reset form fields
      setTitle('');
      setDescription('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error posting course:', error);
      setErrorMessage('An error occurred while posting the course');
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="post-course">
      <h2>Post a Course or Tuition</h2>
      <h5>If you are a teacher</h5>
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
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Post Course</button>
      </form>
    </div>
  );
};

export default PostCourse;
