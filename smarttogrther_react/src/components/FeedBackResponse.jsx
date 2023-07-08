import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    return <p>Loading feedbacks...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback.id}>
              <strong>{feedback.name}</strong> ({feedback.email}) - {feedback.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackPage;
