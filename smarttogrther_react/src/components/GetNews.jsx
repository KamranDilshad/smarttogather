import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedbackPage.css';

const GetNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/news/');
      setNews(response.data);
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
      <h2 className="feedback-title">News</h2>
      {news.length === 0 ? (
        <p>No News available.</p>
      ) : (
        <ul className="feedback-list">
          {news.map((data) => (
            <li className="feedback-item" key={data.id}>
              <strong className="feedback-name">{data.title}</strong>,
              <br />
              <span className="feedback-email">({data.description})</span>
              <br />
              {/* <span className="feedback-message">{data.image}</span> */}
              <div>
          <img src={data.image} alt="" width={200} height={200} />
        </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetNews;
