import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedBackData = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/feedback/");
      setFeedbacks(response.data.feedback);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const FunRemove = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete("http://localhost:8080/api/feedback/" + id)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  if (loading) {
    return <p className="loading">Loading feedbacks...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <>
      <div className="feedback-container">
        <h2 className="feedback-title">Feedbacks</h2>
        {feedbacks.length === 0 ? (
          <p>No feedbacks available.</p>
        ) : (
          <ul className="feedback-list">
            {feedbacks.map((feedback) => (
              <li className="feedback-item" key={feedback.id}>
                <strong className="feedback-name">{feedback.name}</strong>,
                <br />
                <span className="feedback-email">({feedback.email})</span>
                <br />
                <span className="feedback-message">{feedback.message}</span>
                <div class="col-md-12 bg-light text-right">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      FunRemove(feedback._id);
                    }}
                  >
                    
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FeedBackData;
