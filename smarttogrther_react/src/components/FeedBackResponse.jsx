import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './response.css';

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/feedback/');
      setFeedbacks(response.data.feedback);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="loading">Loading feedbacks...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <ul className="feedback-card" >
          {feedbacks.map((feedback) => (
            <div className='feedback-list' >
            <li className="feedback-item" key={feedback.id}>
              <strong className="feedback-name">{feedback.name}</strong>,
              <br />
              <span className="feedback-email">({feedback.email})</span>
              <br />
              <span className="feedback-message">{feedback.message}</span>
            </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackPage;
