import React, { useEffect, useState } from "react";
import {  FaNewspaper } from "react-icons/fa";
import axios from "axios";
import "./FeedbackPage.css";

const GetNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/news/");
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
    <div>
      {news.length === 0 ? (
        <p>No News available.</p>
      ) : (
        <div className="container-fluid ">
          <div className="container py-5">
            <div className="row mx-0 justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center position-relative mb-5">
                  <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                    News
                  </h6>
                  <h1 className="display-4">Top Rated News</h1>
                </div>
              </div>
            </div>
            <div className="row">
              {news.map((news) => (
                <div className="col-lg-4 col-md-6 pb-4" key={news.id}>
                  <img className="img-fluid  " src={news.image} alt="" />
                  <div className="courses-text">
                    <h4 className="text-center text-black px-3">
                      {news.title}
                    </h4>
                    <div className="border-top w-100 mt-2">
                      <div className=" p-1 ">
                          <FaNewspaper />
                        <span className="text-black p-2">
                          {news.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetNews;
