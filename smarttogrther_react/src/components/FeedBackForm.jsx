import React, { useState } from 'react';
import './feedback.css';

const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Perform API integration
    try {
      const response = await fetch('http://localhost:8080/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (!response.ok) {
        throw new Error('Error submitting feedback');
      }

      console.log('Feedback submitted successfully');
      // Close the form
      togglePopup();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrorMessage('An error occurred while submitting feedback');
    }
  };

  return (
    <div className="feedback-popup">
      <button className="feedback-button" onClick={togglePopup}>
        Open Feedback Form
      </button>
      {isOpen && (
        <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Enter your feedback"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackPopup;
